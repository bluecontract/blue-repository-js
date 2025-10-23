import {
  BlueField,
  ModuleBlueIds,
  PRIMITIVE_TYPE_MAP,
} from './utils/blueTypes';
import { getTypeNameFromBlueId } from './utils/getTypeNameFromBlueId';
import { generateImportPath } from './generateImportPath';
import { getSchemaName } from './utils/getSchemaName';

/**
 * Generates a Zod type definition for a nested field reference.
 * Handles primitive types, arrays, records, and custom types.
 * Falls back to z.unknown() for unsupported or unresolved types.
 *
 * @param fieldReference - The field reference containing a Blue ID, or undefined
 * @param moduleIdentifier - The identifier of the current module
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param schemaImportMap - Map to track required schema imports
 * @returns A string representing the Zod type definition
 */
function generateSubZodType(
  fieldReference: { blueId: string } | undefined,
  moduleIdentifier: string,
  blueIds: ModuleBlueIds,
  schemaImportMap: Map<string, string>
): string | null {
  if (!fieldReference) {
    return null;
  }

  const subTypeId = fieldReference.blueId;
  const primitiveType = PRIMITIVE_TYPE_MAP[subTypeId];

  if (primitiveType) {
    const isComplexPrimitive =
      primitiveType === 'array' || primitiveType === 'record';
    if (isComplexPrimitive) {
      return null;
    }
    return `z.${primitiveType}()`;
  }

  const customTypeInfo = getTypeNameFromBlueId(blueIds, subTypeId);
  if (!customTypeInfo) {
    return null;
  }

  const schemaName = getSchemaName(customTypeInfo.typeName);
  const importPath = generateImportPath(moduleIdentifier, customTypeInfo);
  schemaImportMap.set(schemaName, importPath);

  return schemaName;
}

/**
 * Generates a complete Zod type definition for a Blue field.
 * Supports primitive types (string, number, boolean), arrays, records, and custom types.
 * All generated fields are optional by default.
 *
 * @param field - The Blue field definition to convert
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param schemaImportMap - Map to track required schema imports
 * @param moduleIdentifier - The identifier of the current module
 * @returns A string representing the complete Zod type definition with optional modifier
 */
export function generateZodType(
  field: BlueField,
  blueIds: ModuleBlueIds,
  schemaImportMap: Map<string, string>,
  moduleIdentifier: string
): string {
  const typeId = field.type.blueId;
  const primitiveType = PRIMITIVE_TYPE_MAP[typeId];

  let zodTypeDefinition: string;

  if (primitiveType) {
    if (primitiveType === 'array') {
      const itemTypeDefinition = generateSubZodType(
        field.itemType,
        moduleIdentifier,
        blueIds,
        schemaImportMap
      );
      zodTypeDefinition = `z.array(${itemTypeDefinition ?? 'z.unknown()'})`;
    } else if (primitiveType === 'record') {
      const keyTypeDefinition = generateSubZodType(
        field.keyType,
        moduleIdentifier,
        blueIds,
        schemaImportMap
      );
      const valueTypeDefinition = generateSubZodType(
        field.valueType,
        moduleIdentifier,
        blueIds,
        schemaImportMap
      );
      if (!valueTypeDefinition) {
        schemaImportMap.set('blueNodeField', '@blue-labs/language');
      }

      zodTypeDefinition = `z.record(${keyTypeDefinition ?? 'z.string()'}, ${
        valueTypeDefinition ?? 'blueNodeField()'
      })`;
    } else {
      zodTypeDefinition = `z.${primitiveType}()`;
    }
  } else {
    const customTypeInfo = getTypeNameFromBlueId(blueIds, typeId);
    if (customTypeInfo) {
      const schemaName = getSchemaName(customTypeInfo.typeName);
      const importPath = generateImportPath(moduleIdentifier, customTypeInfo);
      schemaImportMap.set(schemaName, importPath);
      zodTypeDefinition = schemaName;
    } else {
      zodTypeDefinition = 'z.unknown()';
    }
  }

  return `${zodTypeDefinition}.optional()`;
}
