#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
import { updateDependencies } from './commands/updateDependencies';
import { generateLibrary } from './commands/generateLibrary';
import { syncCode } from './commands/syncCode';
import { nxReset } from './commands/nxReset';
import { nxSync } from './commands/nxSync';
import { getAllBlueIdsFilesPaths } from './utils/getAllBlueIdsFilesPaths';
import { transformToPackageName } from './utils/transformToPackageName';
import { libraryExists } from './utils/libraryExists';
import { getLibraryBlueId } from './utils/getLibraryBlueId';

/**
 * Main function to process blue-ids.yaml files and generate NX libraries
 */
async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Please provide the input directory path.');
    process.exit(1);
  }

  const inputDir = args[0];

  if (!fs.existsSync(inputDir)) {
    console.error(`Input directory does not exist: ${inputDir}`);
    process.exit(1);
  }

  const blueIdsFilesPaths = getAllBlueIdsFilesPaths(inputDir);
  const withoutMainBlueIdsFilesPaths = blueIdsFilesPaths.filter(
    (v) => v !== 'data/blue-preprocessed/blue-ids.yaml'
  );

  if (withoutMainBlueIdsFilesPaths.length === 0) {
    console.warn('No blue-ids.yaml files found in:', inputDir);
    return;
  }

  const mainBlueIdsContent = fs.readFileSync(
    'data/blue-preprocessed/blue-ids.yaml',
    'utf8'
  );
  const mainBlueIds = yaml.load(mainBlueIdsContent) as Record<string, string>;

  console.log('Found files:', withoutMainBlueIdsFilesPaths);

  const libraryConfigs = withoutMainBlueIdsFilesPaths.map((file) => {
    const parentDir = path.dirname(file);
    const lastDir = path.basename(parentDir);
    const packageName = transformToPackageName(lastDir);
    const importPath = `@blue-repository/${packageName}`;

    return {
      blueIdsYamlFile: file,
      parentDir,
      name: packageName,
      importPackageName: importPath,
      exists: libraryExists(packageName),
      currentBlueId: getLibraryBlueId(packageName),
      newBlueId:
        Object.entries(mainBlueIds).find(
          ([name]) => transformToPackageName(name) === packageName
        )?.[1] ?? null,
    };
  });

  const librariesNeedingUpdate = libraryConfigs.filter((libraryConfig) => {
    return (
      !libraryConfig.exists ||
      libraryConfig.currentBlueId !== libraryConfig.newBlueId
    );
  });

  for (const libraryConfig of librariesNeedingUpdate) {
    if (!libraryConfig.exists) {
      await generateLibrary(libraryConfig);
    }

    await syncCode(libraryConfig);
  }

  if (librariesNeedingUpdate.length > 0) {
    await nxReset();
    await nxSync();

    for (const libraryConfig of librariesNeedingUpdate) {
      await updateDependencies(libraryConfig);
    }
  } else {
    console.log('No libraries need updating.');
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
