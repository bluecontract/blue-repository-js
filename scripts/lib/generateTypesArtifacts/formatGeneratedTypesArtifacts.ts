import * as fs from 'node:fs';
import * as path from 'node:path';
import { createRequire } from 'node:module';

type PrettierModule = typeof import('prettier');

const require = createRequire(import.meta.url);

function tryLoadPrettier(): PrettierModule | null {
  try {
    return require('prettier') as PrettierModule;
  } catch {
    return null;
  }
}

function collectFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));

  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(full));
      continue;
    }
    if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

export function formatGeneratedTypesArtifacts(repoRoot: string) {
  const prettier = tryLoadPrettier();
  if (!prettier) {
    return;
  }

  const typesRoot = path.join(repoRoot, 'libs', 'types');
  const targets: string[] = [];

  const packageJsonPath = path.join(typesRoot, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    targets.push(packageJsonPath);
  }

  const readmePath = path.join(typesRoot, 'README.md');
  if (fs.existsSync(readmePath)) {
    targets.push(readmePath);
  }

  const srcRoot = path.join(typesRoot, 'src');
  if (fs.existsSync(srcRoot)) {
    targets.push(...collectFiles(srcRoot));
  }

  const ignorePath = path.join(repoRoot, '.prettierignore');
  const configFile = prettier.resolveConfigFile.sync(typesRoot) ?? undefined;

  for (const filePath of targets) {
    const info = prettier.getFileInfo.sync(filePath, {
      ignorePath: fs.existsSync(ignorePath) ? ignorePath : undefined,
      withNodeModules: false,
    });
    if (info.ignored || !info.inferredParser) {
      continue;
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const resolvedConfig =
      prettier.resolveConfig.sync(filePath, {
        config: configFile,
        editorconfig: true,
      }) ?? {};

    const formatted = prettier.format(source, {
      ...resolvedConfig,
      filepath: filePath,
    });

    if (formatted !== source) {
      fs.writeFileSync(filePath, formatted);
    }
  }
}

