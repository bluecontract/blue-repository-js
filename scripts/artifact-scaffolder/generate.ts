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

/**
 * Generates an NX library for the given YAML file
 */
async function generateLibrary(file: string, inputDir: string) {
  const relativePath = path.relative(inputDir, file);
  const parentDir = path.dirname(relativePath);

  // Skip if it's the root blue-ids.yaml
  if (parentDir === '.') {
    return;
  }

  const lastDir = path.basename(parentDir);
  const packageName = transformToPackageName(lastDir);

  try {
    console.log(`Generating library: ${packageName}`);
    execSync(`nx g @blue-repository/nx-plugin:library ${packageName}`, {
      stdio: 'inherit',
    });
    console.log(`Successfully generated library: ${packageName}`);
  } catch (error) {
    console.error(`Error generating library ${packageName}:`, error);
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

  // Process each file and generate libraries
  for (const file of files) {
    await generateLibrary(file, inputDir);
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
