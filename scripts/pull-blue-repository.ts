#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';

type CliOptions = {
  src?: string;
  dest?: string;
  noClean?: boolean;
  exclude?: string[];
};

const DEFAULT_EXCLUDES = new Set<string>([
  '.github',
  'blue-repository',
  'blue-preprocessed',
]);

function printUsage() {
  console.log(`Copy Blue Repository

Usage:
  ts-node -P scripts/tsconfig.scripts.json scripts/pull-blue-repository.ts [src] [dest] [--no-clean] [--exclude=name1,name2]

Examples:
  # Default: copy ../blue-repository -> ./data/blue-repository
  ts-node -P scripts/tsconfig.scripts.json scripts/pull-blue-repository.ts

  # Custom source and dest
  ts-node -P scripts/tsconfig.scripts.json scripts/pull-blue-repository.ts /abs/path/to/blue-repo ./data/blue-repository

  # Keep existing destination contents (cleaning is default) and add extra excludes
  ts-node -P scripts/tsconfig.scripts.json scripts/pull-blue-repository.ts --no-clean --exclude=.git,dist
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {};
  const positionals: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
    if (arg === '--no-clean') {
      options.noClean = true;
      continue;
    }
    if (arg.startsWith('--src=')) {
      options.src = arg.slice('--src='.length);
      continue;
    }
    if (arg === '--src') {
      options.src = argv[++i];
      continue;
    }
    if (arg.startsWith('--dest=')) {
      options.dest = arg.slice('--dest='.length);
      continue;
    }
    if (arg === '--dest') {
      options.dest = argv[++i];
      continue;
    }
    if (arg.startsWith('--exclude=')) {
      const list = arg.slice('--exclude='.length);
      options.exclude = list
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }
    if (arg === '--exclude') {
      const list = argv[++i] ?? '';
      options.exclude = list
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }

    // positional
    positionals.push(arg);
  }

  if (!options.src && positionals[0]) options.src = positionals[0];
  if (!options.dest && positionals[1]) options.dest = positionals[1];

  return options;
}

function ensureDirectory(directoryPath: string) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function cleanDirectory(directoryPath: string) {
  if (!fs.existsSync(directoryPath)) return;
  for (const entry of fs.readdirSync(directoryPath)) {
    const full = path.join(directoryPath, entry);
    fs.rmSync(full, { recursive: true, force: true });
  }
}

function copyTopLevelDirectories(
  srcRoot: string,
  destRoot: string,
  excludes: Set<string>
) {
  const entries = fs.readdirSync(srcRoot, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue; // skip dot-directories (e.g., .git)
    if (excludes.has(entry.name)) continue;

    const from = path.join(srcRoot, entry.name);
    const to = path.join(destRoot, entry.name);
    fs.cpSync(from, to, { recursive: true, force: true });
    console.log(`Copied: ${entry.name}`);
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  const srcInput = args.src ?? '../blue-repository';
  const destInput = args.dest ?? './data/blue-repository';

  const srcRoot = path.resolve(process.cwd(), srcInput);
  const destRoot = path.resolve(process.cwd(), destInput);

  const excludes = new Set<string>([
    ...DEFAULT_EXCLUDES,
    ...(args.exclude ?? []),
  ]);

  if (!fs.existsSync(srcRoot) || !fs.statSync(srcRoot).isDirectory()) {
    console.error(
      `Source directory does not exist or is not a directory: ${srcRoot}`
    );
    process.exit(1);
  }

  ensureDirectory(destRoot);
  const shouldClean = args.noClean ? false : true;
  if (shouldClean) {
    console.log(`Cleaning destination: ${destRoot}`);
    cleanDirectory(destRoot);
  } else {
    console.log(`Skipping clean of destination: ${destRoot}`);
  }

  console.log(`Source:      ${srcRoot}`);
  console.log(`Destination: ${destRoot}`);
  console.log(`Excludes:    ${Array.from(excludes).join(', ')}`);

  copyTopLevelDirectories(srcRoot, destRoot, excludes);
  console.log('Done.');
}

main();
