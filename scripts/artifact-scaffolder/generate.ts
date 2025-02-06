#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';

/**
 * Recursively gets all blue-ids.yaml files from a directory and its subdirectories
 */
function getAllFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (entry.isFile() && entry.name === 'blue-ids.yaml') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Transforms a directory name into a valid package name
 * Examples:
 * - "basic1" -> "basic-1"
 * - "Testing JS" -> "testing-js"
 * - "Blue Contracts v0.4" -> "blue-contracts"
 */
function transformToPackageName(dirName: string): string {
  // Remove version suffix if exists (e.g., "v0.4")
  const nameWithoutVersion = dirName.replace(/\sv[\d.]+$/i, '');

  return nameWithoutVersion
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove any characters that aren't letters, numbers, or hyphens
    .replace(/(\d+)/g, '-$1') // Add hyphen before numbers
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

type LibraryConfig = {
  /**
   * Path to the blue-ids.yaml file
   */
  blueIdsYamlFile: string;
  /**
   * Path to the parent directory of the blue-ids.yaml file
   */
  parentDir: string;
  /**
   * Name of the package to be generated
   */
  name: string;
  /**
   * Import path of the package to be generated
   */
  importPackageName: string;
};

/**
 * Generates an NX library for the given YAML file
 */
async function generateLibrary(libraryConfig: LibraryConfig) {
  const { parentDir, name, importPackageName } = libraryConfig;

  // Skip if it's the root blue-ids.yaml
  if (parentDir === '.') {
    return;
  }

  try {
    console.log(`Generating library: ${name}`);
    execSync(`nx g @blue-repository/nx-plugin:library ${name}`, {
      stdio: 'inherit',
    });

    console.log(`Successfully generated library: ${name}`);
  } catch (error) {
    console.error(`Error generating library ${name}:`, error);
  }

  try {
    console.log(`Syncing code for ${name}`);
    execSync(
      `nx g @blue-repository/nx-plugin:sync-code --inputPath="${parentDir}" --libraryName="${importPackageName}"`,
      {
        stdio: 'inherit',
      }
    );

    console.log(`Successfully synced code for ${name}`);
  } catch (error) {
    console.error(`Error syncing code for ${name}:`, error);
  }
}

/**
 * Runs Nx Sync for all libraries
 */
function nxReset() {
  try {
    console.log(`Run Nx Reset`);
    execSync(`nx reset`, {
      stdio: 'inherit',
    });

    console.log(`Successfully Nx Reset`);
  } catch (error) {
    console.error(`Error running Nx Reset:`, error);
  }
}

/**
 * Runs Nx Sync for all libraries
 */
function nxSyncLibraries() {
  try {
    console.log(`Run Nx Sync for all libraries`);
    execSync(`nx sync`, {
      stdio: 'inherit',
    });

    console.log(`Successfully Nx Sync for all libraries`);
  } catch (error) {
    console.error(`Error running Nx Sync for all libraries:`, error);
  }
}

async function updateDependencies(libraryConfig: LibraryConfig) {
  try {
    console.log(`Updating dependencies for ${libraryConfig.name}`);
    execSync(
      `nx g @blue-repository/nx-plugin:sync-deps --libraryName="${libraryConfig.importPackageName}"`,
      {
        stdio: 'inherit',
      }
    );

    console.log(`Successfully updated dependencies for ${libraryConfig.name}`);
  } catch (error) {
    console.error(
      `Error updating dependencies for ${libraryConfig.name}:`,
      error
    );
  }
}

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

  const files = getAllFiles(inputDir);

  if (files.length === 0) {
    console.warn('No blue-ids.yaml files found in:', inputDir);
    return;
  }

  console.log('Found files:', files);

  const libraryConfigs = files.map((file) => {
    const parentDir = path.dirname(file);
    const lastDir = path.basename(parentDir);
    const packageName = transformToPackageName(lastDir);
    const importPath = `@blue-repository/${packageName}`;

    return {
      blueIdsYamlFile: file,
      parentDir,
      name: packageName,
      importPackageName: importPath,
    };
  });

  for (const libraryConfig of libraryConfigs) {
    await generateLibrary(libraryConfig);
  }

  await nxReset();
  await nxSyncLibraries();

  for (const libraryConfig of libraryConfigs) {
    await updateDependencies(libraryConfig);
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
