import * as fs from 'node:fs';
import * as path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { generateTypesArtifacts } from '../lib/generateTypesArtifacts.js';
import { rewriteDistRelativeImportsToJsExtensions } from '../lib/rewriteDistRelativeImports';

export const repoRoot = path.resolve(__dirname, '..', '..');
export const fixturesRoot = path.resolve(__dirname, 'fixtures');

export interface FixtureTypesPackage {
  repoRoot: string;
  typesRoot: string;
  typesDistRoot: string;
  importFromTypesPackage: (specifier: string) => Promise<unknown>;
  readTypesSource: (relativePath: string) => string;
}

let fixtureTypesPackagePromise: Promise<FixtureTypesPackage> | null = null;

export function getFixtureTypesPackage(): Promise<FixtureTypesPackage> {
  if (!fixtureTypesPackagePromise) {
    fixtureTypesPackagePromise = buildFixtureTypesPackage();
  }
  return fixtureTypesPackagePromise;
}

async function buildFixtureTypesPackage(): Promise<FixtureTypesPackage> {
  const fixtureBluePath = path.resolve(fixturesRoot, 'BlueRepository.fixture.blue');
  if (!fs.existsSync(fixtureBluePath)) {
    throw new Error(`Missing fixture BlueRepository file: ${fixtureBluePath}`);
  }

  const baseDir = path.join(repoRoot, 'scripts', 'tools-out', 'test-fixtures');
  fs.mkdirSync(baseDir, { recursive: true });
  const fixtureRepoRoot = fs.mkdtempSync(path.join(baseDir, 'types-'));

  const fixtureTypesRoot = path.join(fixtureRepoRoot, 'libs', 'types');
  fs.mkdirSync(fixtureTypesRoot, { recursive: true });

  fs.copyFileSync(
    path.join(repoRoot, 'libs', 'types', 'package.json'),
    path.join(fixtureTypesRoot, 'package.json'),
  );
  fs.copyFileSync(
    path.join(repoRoot, 'tsconfig.base.json'),
    path.join(fixtureRepoRoot, 'tsconfig.base.json'),
  );
  fs.copyFileSync(
    path.join(repoRoot, 'libs', 'types', 'tsconfig.lib.json'),
    path.join(fixtureTypesRoot, 'tsconfig.lib.json'),
  );

  generateTypesArtifacts({ repoRoot: fixtureRepoRoot, sourcePath: fixtureBluePath });

  runTsc(path.join(fixtureTypesRoot, 'tsconfig.lib.json'));
  const fixtureDistRoot = path.join(fixtureTypesRoot, 'dist');
  rewriteDistRelativeImportsToJsExtensions(fixtureDistRoot);

  const requireFromFixtureTypes = createRequire(
    path.join(fixtureTypesRoot, 'package.json'),
  );
  const importFromTypesPackage = async (specifier: string) => {
    const resolved = requireFromFixtureTypes.resolve(specifier);
    return import(pathToFileURL(resolved).href);
  };

  return {
    repoRoot: fixtureRepoRoot,
    typesRoot: fixtureTypesRoot,
    typesDistRoot: fixtureDistRoot,
    importFromTypesPackage,
    readTypesSource: (relativePath: string) =>
      fs.readFileSync(path.join(fixtureTypesRoot, relativePath), 'utf-8'),
  };
}

function runTsc(tsconfigPath: string) {
  const tscCli = path.join(repoRoot, 'node_modules', 'typescript', 'bin', 'tsc');
  const result = spawnSync(process.execPath, [tscCli, '-p', tsconfigPath], {
    cwd: repoRoot,
    env: process.env,
    encoding: 'utf8',
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(
      `tsc failed (exit ${result.status}):\n${result.stdout ?? ''}\n${result.stderr ?? ''}`,
    );
  }
}

export function collectFiles(
  dir: string,
  predicate: (file: string) => boolean,
): string[] {
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(full, predicate));
    } else if (entry.isFile() && predicate(full)) {
      files.push(full);
    }
  }
  return files;
}
