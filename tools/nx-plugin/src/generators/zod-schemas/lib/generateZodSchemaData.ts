// generateZodSchemaData.ts
import { processFields } from './processFields';
import { BlueType, ModuleBlueIds } from './utils/blueTypes';
import { pascal } from '../../../utils/pascal';

/**
 * This interface describes the data our EJS template needs
 * to generate one .ts file for a single schema.
 */
export interface GeneratedSchemaData {
  schemaName: string;
  fields: string[]; // lines for z.object({ ... })
  importsByPath: Record<string, Set<string>>;
}

/**
 * Convert a Map<string, string> (like schemaName -> importPath)
 * into a plain object of { [importPath]: Set<schemaName> } so EJS can iterate.
 */
function convertImportsMap(importsMap: Map<string, string>) {
  const result: Record<string, Set<string>> = {};
  importsMap.forEach((importPath, importedName) => {
    if (!result[importPath]) {
      result[importPath] = new Set<string>();
    }
    result[importPath].add(importedName);
  });
  return result;
}

/**
 * Gather the minimal data the EJS template needs to produce
 * a single Zod schema file for a .blue definition.
 */
export function generateZodSchemaData(
  typeDef: BlueType,
  blueIds: ModuleBlueIds,
  currentModule: string
): GeneratedSchemaData {
  const schemaName = pascal(typeDef.name);
  const imports = new Map<string, string>(); // e.g. MyType -> './MyType'
  // Build the array of lines for the fields
  const fields = processFields(
    typeDef as Record<string, unknown>,
    blueIds,
    imports,
    1,
    currentModule
  );

  const importsByPath = convertImportsMap(imports);

  return {
    schemaName,
    fields,
    importsByPath,
  };
}
