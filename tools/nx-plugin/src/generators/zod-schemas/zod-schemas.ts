import {
  formatFiles,
  readProjectConfiguration,
  Tree,
  generateFiles,
} from '@nx/devkit';
import * as fs from 'fs';
import * as path from 'path';

import { ZodSchemasGeneratorOptions } from './schema';
import { BlueType } from './lib/utils/blueTypes';
import { getAllBlueIds } from './lib/getAllBlueIds';
import { readYamlFile } from '../../utils/readYamlFile';
import { generateZodSchemaData } from './lib/generateZodSchemaData';
import { ensureDirectoryExists } from './lib/utils/ensureDirectoryExists';

/**
 * Generates Zod schemas from Blue type definitions.
 * This generator creates TypeScript files containing Zod schemas based on Blue type definitions.
 * The schemas are generated in the project's src/schema directory.
 *
 * @param tree - The Nx file system tree
 * @param options - Configuration options for the generator
 * @returns A function that logs completion message
 */
export async function zodSchemasGenerator(
  tree: Tree,
  options: ZodSchemasGeneratorOptions
): Promise<() => void> {
  const projectConfig = readProjectConfiguration(tree, options.libraryName);
  const schemasOutputDirectory = path.join(projectConfig.root, 'src/schema');

  ensureDirectoryExists(tree, schemasOutputDirectory);

  const blueIds = getAllBlueIds(options.inputPath);
  const moduleIdentifier = path.basename(options.inputPath);

  const blueTypeFiles = fs
    .readdirSync(options.inputPath)
    .filter((file) => file.endsWith('.blue'))
    .filter((file) => file !== 'package.blue');

  const generatedSchemaNames: string[] = [];

  for (const blueTypeFile of blueTypeFiles) {
    const blueTypeDefinition = readYamlFile<BlueType>(
      path.join(options.inputPath, blueTypeFile)
    );

    const { schemaName, typeName, fields, importsByPath, extendedType } =
      generateZodSchemaData(blueTypeDefinition, blueIds, moduleIdentifier);

    const templateDirectory = path.join(__dirname, './files/schema');
    generateFiles(tree, templateDirectory, schemasOutputDirectory, {
      tmpl: '',
      schemaName,
      typeName,
      fields,
      importsByPath,
      extendedType,
    });

    generatedSchemaNames.push(schemaName);
  }

  const indexTemplateDirectory = path.join(__dirname, './files/schemaIndex');
  generateFiles(tree, indexTemplateDirectory, schemasOutputDirectory, {
    tmpl: '',
    schemaExports: generatedSchemaNames,
  });

  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('zodSchemasGenerator completed');
  };
}

export default zodSchemasGenerator;
