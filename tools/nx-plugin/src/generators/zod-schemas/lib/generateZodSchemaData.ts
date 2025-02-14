import { processFields } from './processFields';
import { BlueType, ModuleBlueIds } from './utils/blueTypes';
import { pascal } from '../../../utils/pascal';

/**
 * Represents the data structure required by the EJS template to generate
 * a TypeScript file containing a single Zod schema.
 */
export interface GeneratedSchemaData {
  /** The PascalCase name of the schema */
  schemaName: string;
  /** Array of field definitions for the z.object constructor */
  fields: string[];
  /** Map of import paths to sets of imported type names */
  importsByPath: Record<string, Set<string>>;
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
  const schemaImportMap = new Map<string, string>();

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
    fields,
    importsByPath,
  };
}
