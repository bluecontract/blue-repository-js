#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { spawnSync } from 'node:child_process';

type CliOptions = {
  packages: string[]; // workspace package names or lib folder names
  all: boolean;
  noBuild: boolean;
};

function printUsage() {
  console.log(`Build and publish selected packages to yalc

Usage:
  ts-node -P scripts/tsconfig.scripts.json scripts/yalc-publish.ts [--all] [--no-build] [pkg1 pkg2 ...]

Examples:
  # Publish specific libs by folder or full name
  npm run yalc:publish -- @blue-repository/core basic1

  # Publish all workspace libs
  npm run yalc:publish -- --all

  # Skip builds (assumes dist/ exists)
  npm run yalc:publish -- --no-build @blue-repository/core
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = { packages: [], all: false, noBuild: false };
  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
    if (arg === '--all') {
      options.all = true;
      continue;
    }
    if (arg === '--no-build') {
      options.noBuild = true;
      continue;
    }
    options.packages.push(arg);
  }
  return options;
}

function listWorkspaceLibs(root: string): string[] {
  const libsDir = path.join(root, 'libs');
  if (!fs.existsSync(libsDir)) return [];
  return fs
    .readdirSync(libsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function resolvePackageDirs(root: string, selectors: string[]): string[] {
  const libs = new Set(listWorkspaceLibs(root));
  const results: string[] = [];

  for (const selector of selectors) {
    // allow folder name like "core" or full package name like "@blue-repository/core"
    const folderName = selector.startsWith('@')
      ? selector.split('/')[1]
      : selector;
    if (!folderName) continue;
    if (!libs.has(folderName)) {
      console.warn(`Skipping unknown lib: ${selector}`);
      continue;
    }
    results.push(path.join(root, 'libs', folderName));
  }
  return results;
}

function run(cmd: string, args: string[], cwd: string) {
  const res = spawnSync(cmd, args, {
    cwd,
    stdio: 'inherit',
    env: process.env,
  });
  if (res.error) throw res.error;
  if (res.status !== 0) {
    throw new Error(
      `${cmd} ${args.join(' ')} failed with exit code ${res.status}`
    );
  }
}

function buildIfNeeded(libDir: string, noBuild: boolean) {
  if (noBuild) return;
  const viteConfig = path.join(libDir, 'vite.config.ts');
  if (!fs.existsSync(viteConfig)) {
    console.log(`[skip build] no vite.config.ts in ${libDir}`);
    return;
  }
  console.log(`[build] ${path.basename(libDir)}`);
  run('npx', ['vite', 'build', '--config', viteConfig], libDir);
}

function yalcPublish(libDir: string) {
  const pkgJsonPath = path.join(libDir, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    console.warn(`[skip] No package.json in ${libDir}`);
    return;
  }
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')) as {
    name?: string;
  };
  console.log(`[yalc publish] ${pkg.name ?? path.basename(libDir)}`);
  run('npx', ['yalc', 'publish', '--private'], libDir);
}

function main() {
  const root = process.cwd();
  const args = parseArgs(process.argv.slice(2));

  const targets = args.all
    ? listWorkspaceLibs(root).map((d) => path.join(root, 'libs', d))
    : resolvePackageDirs(root, args.packages);

  if (targets.length === 0) {
    console.error('No packages selected. Use --all or pass specific packages.');
    printUsage();
    process.exit(1);
  }

  for (const libDir of targets) {
    buildIfNeeded(libDir, args.noBuild);
    yalcPublish(libDir);
  }

  console.log('Done.');
}

main();
