// generateZodType.ts
import {
  BlueField,
  ModuleBlueIds,
  PRIMITIVE_TYPE_MAP,
} from './utils/blueTypes';
import { getTypeNameFromBlueId } from './utils/getTypeNameFromBlueId';
import { generateImportPath } from './generateImportPath';
import { pascal } from '../../../utils/pascal';

/**
 * A helper so we don't repeat "parse sub type" logic everywhere.
 */
function getSubZodType(
  subFieldRef: { blueId: string } | undefined,
  currentModule: string,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>
): string {
  if (!subFieldRef) return 'z.unknown()';

  const subId = subFieldRef.blueId;
  const primitive = PRIMITIVE_TYPE_MAP[subId];
  if (primitive) {
    // if it's array or record at the sub-level, fallback to unknown
    // (You could nest further if you prefer.)
    if (primitive === 'array' || primitive === 'record') {
      return 'z.unknown()';
    }
    // string, number, boolean
    return `z.${primitive}()`;
  } else {
    // custom type
    const typeInfo = getTypeNameFromBlueId(blueIds, subId);
    if (!typeInfo) {
      return 'z.unknown()';
    }
    const schemaName = pascal(typeInfo.typeName);
    const importPath = generateImportPath(currentModule, typeInfo);
    imports.set(schemaName, importPath);
    return `${schemaName}Schema`;
  }
}

/**
 * Main entry point: produce a single Zod type snippet
 * for a top-level BlueField. e.g. z.string().optional()
 */
export function generateZodType(
  field: BlueField,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  currentModule: string
): string {
  const typeId = field.type.blueId;
  let zodType = 'z.unknown()'; // fallback

  // If typeId is known as a primitive:
  const primitive = PRIMITIVE_TYPE_MAP[typeId];

  if (primitive) {
    if (primitive === 'array') {
      // For array, check itemType
      const itemZod = getSubZodType(
        field.itemType,
        currentModule,
        blueIds,
        imports
      );
      zodType = `z.array(${itemZod})`;
    } else if (primitive === 'record') {
      // For record, check keyType & valueType
      const keyZod = getSubZodType(
        field.keyType,
        currentModule,
        blueIds,
        imports
      );
      const valueZod = getSubZodType(
        field.valueType,
        currentModule,
        blueIds,
        imports
      );
      zodType = `z.record(${keyZod}, ${valueZod})`;
    } else {
      // string/number/boolean
      zodType = `z.${primitive}()`;
    }
  } else {
    // Maybe it's a custom type
    const typeInfo = getTypeNameFromBlueId(blueIds, typeId);
    if (typeInfo) {
      const schemaName = pascal(typeInfo.typeName);
      const importPath = generateImportPath(currentModule, typeInfo);
      imports.set(schemaName, importPath);
      zodType = `${schemaName}Schema`;
    }
  }

  // Optionally, all fields are .optional() by default
  return `${zodType}.optional()`;
}
