#!/usr/bin/env node

import { readFileSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import { PackageJson } from '../types';

async function main() {
  const packageName = process.argv[2];
  if (!packageName) {
    console.error('Please provide a package name');
    process.exit(1);
  }

  const dirName = packageName.replace('@blue-repository/', '');
  const packagePath = join('libs', dirName, 'package.json');

  try {
    const packageJson = JSON.parse(
      readFileSync(packagePath, 'utf8')
    ) as PackageJson;
    const moduleBlueId = packageJson.blueType?.moduleBlueId;
    const version = packageJson.version;

    if (!moduleBlueId) {
      console.error('No moduleBlueId found in package.json');
      process.exit(1);
    }

    if (process.env.DRY_RUN === 'true') {
      console.log(
        `[DRY-RUN] Would execute: npm dist-tag add ${packageName}@${version} ${moduleBlueId}`
      );
    } else {
      console.log(`Tagging package with moduleBlueId: ${moduleBlueId}`);
      execSync(`npm dist-tag add ${packageName}@${version} ${moduleBlueId}`, {
        stdio: 'inherit',
        env: {
          ...process.env,
          NODE_AUTH_TOKEN: process.env.NODE_AUTH_TOKEN,
        },
      });
    }
  } catch (error) {
    console.error(
      'Error:',
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
