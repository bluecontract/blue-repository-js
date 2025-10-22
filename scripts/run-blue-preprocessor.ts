#!/usr/bin/env node

import * as fs from 'node:fs';
import * as path from 'node:path';
import { execSync } from 'node:child_process';

type CliOptions = {
  jar?: string;
  src?: string;
};

function printUsage() {
  console.log(`Run Blue Preprocessor

Usage:
  ts-node -P scripts/tsconfig.scripts.json scripts/run-blue-preprocessor.ts [<path-to-jar>] [path-to-blue-repository]

Examples:
  # Default jar: ../blue-preprocessor.jar
  # Default repo path: ./data/blue-repository, output: ./data/blue-preprocessed
  ts-node -P scripts/tsconfig.scripts.json scripts/run-blue-preprocessor.ts

  # Custom repository path
  ts-node -P scripts/tsconfig.scripts.json scripts/run-blue-preprocessor.ts ./relative/jars/blue-preprocessor.jar ./data/blue-repository
`);
}

function parseArgs(argv: string[]): CliOptions {
  const options: CliOptions = {};

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
    if (arg.startsWith('--jar=')) {
      options.jar = arg.slice('--jar='.length);
      continue;
    }
    if (arg === '--jar') {
      options.jar = argv[++i];
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
    // positional fallbacks: <jar> [src]
    if (!options.jar) {
      options.jar = arg;
      continue;
    }
    if (!options.src) {
      options.src = arg;
      continue;
    }
  }

  return options;
}

function ensureDirectory(directoryPath: string) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  // Support npm-run style flags without the double dash by reading npm_config_* env vars
  if (!args.jar && process.env.npm_config_jar) {
    args.jar = process.env.npm_config_jar;
  }
  if (!args.src && process.env.npm_config_src) {
    args.src = process.env.npm_config_src;
  }

  const root = process.cwd();
  const defaultSrc = path.resolve(root, './data/blue-repository');
  const defaultJar = path.resolve(root, '../blue-preprocessor.jar');
  const outDir = path.resolve(root, './data/blue-preprocessed');

  const jarInput = args.jar ?? '../blue-preprocessor.jar';
  const srcInput = args.src ?? defaultSrc;

  const jarPath = path.resolve(root, jarInput);
  const srcPath = path.resolve(root, srcInput);

  if (!fs.existsSync(jarPath) || !fs.statSync(jarPath).isFile()) {
    console.error(
      `Jar file does not exist or is not a file: ${jarPath}\n` +
        `Provide with --jar=<path> or place it at the default location: ${defaultJar}`
    );
    process.exit(1);
  }

  if (!fs.existsSync(srcPath) || !fs.statSync(srcPath).isDirectory()) {
    console.error(
      `Blue repository path does not exist or is not a directory: ${srcPath}`
    );
    process.exit(1);
  }

  ensureDirectory(outDir);

  console.log('Running preprocessor with:');
  console.log(`  JAR:  ${jarPath}`);
  console.log(`  SRC:  ${srcPath}`);
  console.log(`  OUT:  ${outDir}`);

  const cmd = `java -jar "${jarPath}" "${srcPath}" "${outDir}"`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    console.log('Preprocessing complete.');
  } catch (err) {
    console.error('Error running blue preprocessor:', err);
    process.exit(1);
  }
}

main();
