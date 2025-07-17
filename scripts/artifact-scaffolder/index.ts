#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
import { updateDependencies } from './commands/updateDependencies';
import { generateLibrary } from './commands/generateLibrary';
import { syncCode } from './commands/syncCode';
import { nxReset } from './commands/nxReset';
import { nxSync } from './commands/nxSync';
import { updateAllRootIndexFiles } from './commands/updateRootIndexFiles';
import { getAllBlueIdsFilesPaths } from './utils/getAllBlueIdsFilesPaths';
import { transformToPackageName } from './utils/transformToPackageName';
import { libraryExists } from './utils/libraryExists';
import { getLibraryBlueId } from './utils/getLibraryBlueId';

/**
 * Main function to process blue-ids.yaml files and generate NX libraries
 *
 * Flags:
 * --force-all: Force code generation for all libraries (bypass filtering)
 * --migration <name>: Run specific migration (e.g., "root-index-contents")
 */
async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Please provide the input directory path.');
    process.exit(1);
  }

  const inputDir = args[0];
  const forceAll = args.includes('--force-all');

  // Extract migration parameter
  const migrationIndex = args.indexOf('--migration');
  const migration =
    migrationIndex !== -1 && migrationIndex + 1 < args.length
      ? args[migrationIndex + 1]
      : null;

  if (forceAll) {
    console.log('🚀 Force mode enabled: generating code for ALL libraries');
  }

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
        Object.entries(mainBlueIds).find(([name]) => name === lastDir)?.[1] ??
        null,
    };
  });

  const uniqueLibraryConfigs = libraryConfigs
    // Sort by parent directory name in descending order to process libraries with greater version numbers first
    .sort((a, b) => b.parentDir.localeCompare(a.parentDir))
    // Filter out duplicate library configs by name to avoid processing the same library with different version numbers multiple times
    .filter(
      (libraryConfig, index, self) =>
        index === self.findIndex((t) => t.name === libraryConfig.name)
    );

  const librariesNeedingCodeGeneration = forceAll
    ? uniqueLibraryConfigs
    : uniqueLibraryConfigs.filter((libraryConfig) => {
        return (
          !libraryConfig.exists ||
          libraryConfig.currentBlueId !== libraryConfig.newBlueId
        );
      });

  if (librariesNeedingCodeGeneration.length === 0) {
    console.log('No libraries needed code generation');
  } else {
    console.log(
      `Processing ${librariesNeedingCodeGeneration.length} libraries${
        forceAll ? ' (force mode)' : ''
      }`
    );
  }

  for (const libraryConfig of librariesNeedingCodeGeneration) {
    if (!libraryConfig.exists) {
      await generateLibrary(libraryConfig);
    }

    await syncCode(libraryConfig);
  }

  await nxReset();
  await nxSync();

  for (const libraryConfig of libraryConfigs) {
    await updateDependencies(libraryConfig);
  }

  // Run migrations if explicitly requested
  if (migration) {
    if (!forceAll) {
      console.error(
        '❌ Migration can only be run in force mode. Please use --force-all flag.'
      );
      process.exit(1);
    }

    console.log(`🔄 Running migration: ${migration}`);

    switch (migration) {
      case 'root-index-contents':
        await updateAllRootIndexFiles(libraryConfigs);
        break;
      default:
        console.error(`❌ Unknown migration: ${migration}`);
        console.log('Available migrations:');
        console.log(
          '  - root-index-contents: Add contents export to root index.ts files'
        );
        process.exit(1);
    }
  } else {
    console.log('⏭️  No migration specified, skipping migration step');
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
