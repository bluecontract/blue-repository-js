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
 * Given a BlueField and known blueIds, produce a Zod expression (as a string).
 * Also track which imports are needed (via the imports map).
 */
export function generateZodType(
  field: BlueField,
  blueIds: ModuleBlueIds,
  imports: Map<string, string>,
  currentModule: string
): string {
  const typeId = field.type.blueId;
  let zodType = 'z.unknown()';

  if (PRIMITIVE_TYPE_MAP[typeId]) {
    const primitive = PRIMITIVE_TYPE_MAP[typeId];

    if (primitive === 'array') {
      // If array, see if we have an itemType
      if (field.itemType) {
        const itemTypeId = field.itemType.blueId;
        if (PRIMITIVE_TYPE_MAP[itemTypeId]) {
          zodType = `z.array(z.${PRIMITIVE_TYPE_MAP[itemTypeId]}())`;
        } else {
          const itemTypeInfo = getTypeNameFromBlueId(blueIds, itemTypeId);
          if (itemTypeInfo) {
            const schemaName = pascal(itemTypeInfo.typeName);
            const importPath = generateImportPath(currentModule, itemTypeInfo);
            imports.set(schemaName, importPath);
            zodType = `z.array(${schemaName}Schema)`;
          } else {
            zodType = 'z.array(z.unknown())';
          }
        }
      } else {
        zodType = 'z.array(z.unknown())';
      }
    } else if (primitive === 'record') {
      // dictionary, handle keyType + valueType
      let keyZod = 'z.string()';
      if (field.keyType) {
        const keyId = field.keyType.blueId;
        if (PRIMITIVE_TYPE_MAP[keyId]) {
          keyZod = `z.${PRIMITIVE_TYPE_MAP[keyId]}()`;
        } else {
          const keyInfo = getTypeNameFromBlueId(blueIds, keyId);
          if (keyInfo) {
            const schemaName = pascal(keyInfo.typeName);
            const importPath = generateImportPath(currentModule, keyInfo);
            imports.set(schemaName, importPath);
            keyZod = `${schemaName}Schema`;
          }
        }
      }
      let valueZod = 'z.unknown()';
      if (field.valueType) {
        const valId = field.valueType.blueId;
        if (PRIMITIVE_TYPE_MAP[valId]) {
          valueZod = `z.${PRIMITIVE_TYPE_MAP[valId]}()`;
        } else {
          const valInfo = getTypeNameFromBlueId(blueIds, valId);
          if (valInfo) {
            const schemaName = pascal(valInfo.typeName);
            const importPath = generateImportPath(currentModule, valInfo);
            imports.set(schemaName, importPath);
            valueZod = `${schemaName}Schema`;
          }
        }
      }
      zodType = `z.record(${keyZod}, ${valueZod})`;
    } else {
      // string, number, boolean
      zodType = `z.${primitive}()`;
    }
  } else {
    // It's a custom type
    const typeInfo = getTypeNameFromBlueId(blueIds, typeId);
    if (typeInfo) {
      const schemaName = pascal(typeInfo.typeName);
      const importPath = generateImportPath(currentModule, typeInfo);
      imports.set(schemaName, importPath);
      zodType = `${schemaName}Schema`;
    }
  }

  // Each field is optional by default (can remove if you prefer)
  return zodType + '.optional()';
}
