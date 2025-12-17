import * as fs from 'node:fs';
import * as path from 'node:path';
import packageJson from '../../../libs/types/package.json' with { type: 'json' };

export function updatePackageJsonExports(
  repoRoot: string,
  packageNames: string[],
  meta: { name: string; repositoryVersions: readonly string[]; version?: string },
) {
  const pkgPath = path.join(repoRoot, 'libs/types/package.json');
  const pkg: Record<string, any> = structuredClone(packageJson) as any;
  const moduleBlueId = meta.version ?? meta.repositoryVersions.at(-1) ?? '';
  pkg.blueType = {
    moduleName: meta.name,
    moduleBlueId,
  };

  const baseExports: Record<string, any> = {
    './package.json': './package.json',
    '.': { types: './dist/index.d.ts', default: './dist/index.js' },
    './meta': { types: './dist/meta.d.ts', default: './dist/meta.js' },
    './repository': {
      types: './dist/repository.d.ts',
      default: './dist/repository.js',
    },
    './packages': {
      types: './dist/packages/index.d.ts',
      default: './dist/packages/index.js',
    },
    './packages/*': {
      types: './dist/packages/*/index.d.ts',
      default: './dist/packages/*/index.js',
    },
  };

  const wildcardExports: Record<string, any> = {
    './packages/*/schemas': {
      types: './dist/packages/*/schemas.d.ts',
      default: './dist/packages/*/schemas.js',
    },
    './packages/*/contents': {
      types: './dist/packages/*/contents.d.ts',
      default: './dist/packages/*/contents.js',
    },
    './packages/*/blue-ids': {
      types: './dist/packages/*/blue-ids.d.ts',
      default: './dist/packages/*/blue-ids.js',
    },
    './packages/*/meta': {
      types: './dist/packages/*/meta.d.ts',
      default: './dist/packages/*/meta.js',
    },
  };

  const perPackage: Record<string, any> = {};
  for (const name of packageNames) {
    perPackage[`./packages/${name}/schemas/*`] = {
      types: `./dist/packages/${name}/schemas/*.d.ts`,
      default: `./dist/packages/${name}/schemas/*.js`,
    };
    perPackage[`./packages/${name}/contents/*`] = {
      types: `./dist/packages/${name}/contents/*.d.ts`,
      default: `./dist/packages/${name}/contents/*.js`,
    };
  }

  pkg.exports = { ...baseExports, ...wildcardExports, ...perPackage };
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

