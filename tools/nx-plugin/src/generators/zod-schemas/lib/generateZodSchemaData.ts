import { processFields } from './processFields';
import { BlueType, ModuleBlueIds, PRIMITIVE_TYPE_MAP } from './utils/blueTypes';
import { pascal } from '../../../utils/pascal';
import { getTypeNameFromBlueId } from './utils/getTypeNameFromBlueId';
import { generateImportPath } from './generateImportPath';
import { getSchemaName } from './utils/getSchemaName';

/**
 * Represents the data structure required by the EJS template to generate
 * a TypeScript file containing a single Zod schema.
 */
export interface GeneratedSchemaData {
  /** The PascalCase name of the schema */
  schemaName: string;
  /** The name of the type */
  typeName: string;
  /** Array of field definitions for the z.object constructor */
  fields: string[];
  /** Map of import paths to sets of imported type names */
  importsByPath: Record<string, Set<string>>;
  /** Information about the extended type, if any */
  extendedType?: {
    schemaName: string;
    importPath: string;
  };
}

/**
 * Transforms a schema name to import path mapping into a grouped import path structure.
 *
 * @param schemaImportMap - Map where key is schema name and value is its import path
 * @returns Object where key is import path and value is set of schema names to import from that path
 */
function convertImportsMap(
  schemaImportMap: Map<string, string>
): Record<string, Set<string>> {
  const groupedImports: Record<string, Set<string>> = {};

  schemaImportMap.forEach((importPath, schemaName) => {
    if (!groupedImports[importPath]) {
      groupedImports[importPath] = new Set<string>();
    }
    groupedImports[importPath].add(schemaName);
  });

  return groupedImports;
}

/**
 * Determines if a type extends another type and returns the extended type information.
 *
 * @param typeDefinition - The Blue type definition to check for extension
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param moduleIdentifier - The identifier of the current module
 * @param schemaImportMap - Map to store schema imports (will be modified if extended type is found)
 * @returns Extended type information if the type extends another type, undefined otherwise
 */
function getExtendedType(
  typeDefinition: BlueType,
  blueIds: ModuleBlueIds,
  moduleIdentifier: string,
  schemaImportMap: Map<string, string>
): GeneratedSchemaData['extendedType'] {
  if (!typeDefinition.type?.blueId) {
    return undefined;
  }

  const extendedTypeId = typeDefinition.type.blueId;

  // Only extend if it's not a primitive type
  if (PRIMITIVE_TYPE_MAP[extendedTypeId]) {
    return undefined;
  }

  const extendedTypeInfo = getTypeNameFromBlueId(blueIds, extendedTypeId);
  if (!extendedTypeInfo) {
    return undefined;
  }

  const extendedSchemaName = getSchemaName(extendedTypeInfo.typeName);
  const extendedImportPath = generateImportPath(
    moduleIdentifier,
    extendedTypeInfo
  );

  // Add to import map
  schemaImportMap.set(extendedSchemaName, extendedImportPath);

  return {
    schemaName: extendedSchemaName,
    importPath: extendedImportPath,
  };
}

/**
 * Generates the necessary data for creating a Zod schema file from a Blue type definition.
 *
 * @param typeDefinition - The Blue type definition to convert to a Zod schema
 * @param blueIds - Collection of Blue IDs from the current module and its parents
 * @param moduleIdentifier - The identifier of the current module
 * @returns Data structure containing all information needed to generate the schema file
 */
export function generateZodSchemaData(
  typeDefinition: BlueType,
  blueIds: ModuleBlueIds,
  moduleIdentifier: string
): GeneratedSchemaData {
  const schemaName = pascal(typeDefinition.name);
  const typeName = typeDefinition.name;

  // Default imports from @blue-company/language
  const schemaImportMap = new Map<string, string>([
    ['withTypeBlueId', '@blue-company/language'],
  ]);

  // Check if this type extends another type
  const extendedType = getExtendedType(
    typeDefinition,
    blueIds,
    moduleIdentifier,
    schemaImportMap
  );

  const fields = processFields(
    typeDefinition as Record<string, unknown>,
    blueIds,
    schemaImportMap,
    1,
    moduleIdentifier
  );

  const importsByPath = convertImportsMap(schemaImportMap);

  return {
    schemaName,
    typeName,
    fields,
    importsByPath,
    extendedType,
  };
}
