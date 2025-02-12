// zodSchemasGenerator.ts
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
import { readYamlFile } from './lib/utils/readYamlFile';
import { generateZodSchemaData } from './lib/generateZodSchemaData';
import { ensureDirectoryExists } from './lib/utils/ensureDirectoryExists';

export async function zodSchemasGenerator(
  tree: Tree,
  options: ZodSchemasGeneratorOptions
) {
  // 1) Find the Nx project
  const projectConfig = readProjectConfiguration(tree, options.libraryName);
  // We'll generate .ts files under: <project root>/src/schema
  const schemasDir = path.join(projectConfig.root, 'src/schema');

  // Make sure the schema directory exists
  ensureDirectoryExists(tree, schemasDir);

  // 2) Collect all blueIds from the current module & any parents
  const blueIds = getAllBlueIds(options.inputPath);
  const currentModule = path.basename(options.inputPath);

  // 3) Read all .blue files
  const blueFiles = fs
    .readdirSync(options.inputPath)
    .filter((file) => file.endsWith('.blue'));

  // We'll store a list of schema names to build an index
  const schemaExports: string[] = [];

  // 4) For each .blue file, generate a schema .ts
  for (const file of blueFiles) {
    if (file === 'package.blue') continue; // skip special .blue

    // Parse the .blue file as a BlueType
    const blueType = readYamlFile<BlueType>(path.join(options.inputPath, file));

    // Produce the data needed for EJS
    const { schemaName, fields, importsByPath } = generateZodSchemaData(
      blueType,
      blueIds,
      currentModule
    );

    // 5) Use Nx generateFiles to create the .ts file from EJS
    generateFiles(
      tree,
      path.join(__dirname, './files/schema'), // folder with our EJS templates
      schemasDir, // destination
      {
        tmpl: '', // Nx trick to remove `__tmpl__` from filenames
        schemaName, // rename __schemaName__.ts__tmpl__ => e.g. User.ts
        fields,
        importsByPath,
      }
    );

    // Add to our export list
    schemaExports.push(schemaName);
  }

  // 6) Generate the index.ts using index.ts__tmpl__
  generateFiles(tree, path.join(__dirname, './files/schemaIndex'), schemasDir, {
    tmpl: '',
    schemaExports,
  });

  // 7) Optionally format
  if (!options.skipFormat) {
    await formatFiles(tree);
  }

  return () => {
    console.log('zodSchemasGenerator completed');
  };
}

export default zodSchemasGenerator;
