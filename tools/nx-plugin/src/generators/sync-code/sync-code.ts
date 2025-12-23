import {
  GeneratorCallback,
} from '@nx/devkit';
import { SyncCodeGeneratorSchema } from './schema';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const normalizeOptions = (options: SyncCodeGeneratorSchema) => {
  return {
    sourcePath: options.sourcePath ?? 'BlueRepository.blue',
    skipFormat: options.skipFormat ?? false,
  };
};

export const syncCodeGenerator = async (
  _tree: unknown,
  schema: SyncCodeGeneratorSchema
) => {
  const options = normalizeOptions(schema);

  const workspaceRoot = process.cwd();
  const sourcePath = path.isAbsolute(options.sourcePath)
    ? options.sourcePath
    : path.join(workspaceRoot, options.sourcePath);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`BlueRepository.blue not found at ${sourcePath}`);
  }

  const tsxCli = require.resolve('tsx/dist/cli.mjs');
  const generateScript = path.join(
    workspaceRoot,
    'scripts',
    'cli',
    'generate-types-artifacts.ts'
  );

  const args = [tsxCli, generateScript];
  if (options.skipFormat) {
    args.push('--skipFormat');
  }

  execFileSync(process.execPath, args, {
    cwd: workspaceRoot,
    env: {
      ...process.env,
      BLUE_REPOSITORY_SOURCE: sourcePath,
    },
    stdio: 'inherit',
  });

  return (() => {
    console.log(
      `sync-code completed (generated @blue-repository/types from ${path.relative(
        workspaceRoot,
        sourcePath
      )})`
    );
  }) satisfies GeneratorCallback;
};

export default syncCodeGenerator;
