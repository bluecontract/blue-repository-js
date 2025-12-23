#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

type CliOptions = {
  noBuild: boolean;
};

function printUsage() {
  console.log(`Build and publish @blue-repository/types to yalc

Usage:
  npm run yalc:publish -- [--no-build]

Examples:
  # Skip builds (assumes dist/ exists)
  npm run yalc:publish -- --no-build
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = { noBuild: false };
  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
    if (arg === '--no-build') {
      options.noBuild = true;
      continue;
    }
    console.warn(`Ignoring unexpected arg: ${arg}`);
  }
  return options;
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

function buildIfNeeded(noBuild: boolean, repoRoot: string) {
  if (noBuild) return;

  console.log('[build] types via npm run build:types');
  run('npm', ['run', 'build:types'], repoRoot);
}

function yalcPublish(typesDir: string) {
  const pkgJsonPath = path.join(typesDir, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) {
    console.warn(`[skip] No package.json in ${typesDir}`);
    return;
  }
  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')) as {
    name?: string;
  };
  console.log(`[yalc publish] ${pkg.name ?? path.basename(typesDir)}`);
  run('npx', ['yalc', 'publish', '--private'], typesDir);
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const repoRoot = path.resolve(scriptDir, '..', '..');
  const typesDir = path.join(repoRoot, 'libs', 'types');

  if (!fs.existsSync(typesDir)) {
    throw new Error(`Expected ${typesDir} to exist`);
  }

  buildIfNeeded(args.noBuild, repoRoot);
  yalcPublish(typesDir);

  console.log('Done.');
}

main();
