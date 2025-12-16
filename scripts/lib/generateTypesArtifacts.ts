import * as fs from 'node:fs';
import * as path from 'node:path';
import yaml from 'js-yaml';
import type {
  BluePackage,
  BlueRepositoryDocument,
} from './repositoryTypesBuilder/index.js';
import { buildRepositoryArtifacts } from './repositoryTypesBuilder/index.js';
import { compileValueSchemasFromRepository } from './zodSchemaCompiler/index.js';
import { toIdentifier, toPackageIdentifier } from './identifier.js';
import packageJson from '../../libs/types/package.json' with { type: 'json' };

export interface GenerateTypesArtifactsOptions {
  repoRoot: string;
  sourcePath: string;
}

function readRepositorySource(sourcePath: string): BlueRepositoryDocument {
  const raw = fs.readFileSync(sourcePath, 'utf-8');
  const parsed = yaml.load(raw) as any;

  const packages: BluePackage[] = (parsed?.packages || []).map((pkg: any) => ({
    name: pkg?.name || '',
    types: (pkg?.types || []).map((type: any) => ({
      status: type?.status,
      content: type?.content,
      versions: (type?.versions || []).map((version: any) => ({
        repositoryVersionIndex: version?.repositoryVersionIndex,
        typeBlueId: version?.typeBlueId,
        attributesAdded: version?.attributesAdded || [],
      })),
    })),
  }));

  return {
    name: parsed?.name || 'unknown',
    repositoryVersions: parsed?.repositoryVersions || [],
    packages,
  };
}

function writeFile(root: string, relPath: string, content: string) {
  const fullPath = path.join(root, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

function formatObject(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function generateMeta(outDir: string, meta: any) {
  const content =
    `export const name = ${JSON.stringify(meta.name)} as const;\n` +
    `export const repositoryVersions = ${formatObject(
      meta.repositoryVersions,
    )} as const;\n` +
    `export default { name, repositoryVersions } as const;\n`;
  writeFile(outDir, 'meta.ts', content);
}

function generateBlueIds(
  outDir: string,
  packageName: string,
  pkg: {
    name: string;
    typesMeta: Record<string, { name: string }>;
    aliases?: Record<string, string>;
  },
) {
  const blueIds: Record<string, string> = { ...(pkg.aliases || {}) };
  Object.entries(pkg.typesMeta).forEach(([currentBlueId, meta]) => {
    const alias = `${pkg.name}/${meta.name}`;
    blueIds[alias] = currentBlueId;
  });

  const content =
    `export const blueIds = ${formatObject(blueIds)} as const;\n` +
    `export default blueIds;\n`;
  writeFile(outDir, path.join('packages', packageName, 'blue-ids.ts'), content);
}

function generatePackageArtifacts(
  outDir: string,
  packageName: string,
  pkg: any,
  schemaFiles: Record<string, string>,
  schemaIndexTs: string,
  schemasTs: string,
) {
  const pkgDir = path.join('packages', packageName);
  const metaContent = `const meta = ${formatObject({
    name: pkg.name,
    aliases: pkg.aliases,
    typesMeta: pkg.typesMeta,
  })} as const;\nexport default meta;\n`;
  writeFile(outDir, path.join(pkgDir, 'meta.ts'), metaContent);

  const contentEntries: Array<{ safe: string; blueId: string }> = [];
  Object.entries(pkg.contents || {}).forEach(([blueId, content]) => {
    const typeMeta = pkg.typesMeta?.[blueId];
    if (!typeMeta) {
      throw new Error(
        `Invalid repository package '${packageName}': missing typesMeta entry for blueId '${blueId}'`,
      );
    }
    const safe = toIdentifier(typeMeta.name, blueId);
    const fileContent = `export const ${safe} = ${formatObject(
      content,
    )} as const;\n`;
    writeFile(outDir, path.join(pkgDir, 'contents', `${safe}.ts`), fileContent);
    contentEntries.push({ safe, blueId });
  });

  const contentsImports = contentEntries
    .map((entry) => `import { ${entry.safe} } from './${entry.safe}';`)
    .join('\n');
  const contentsExports = contentEntries
    .map((entry) => `export { ${entry.safe} } from './${entry.safe}';`)
    .join('\n');
  const contentsMapEntries = contentEntries
    .map((e) => `  '${e.blueId}': ${e.safe}`)
    .join(',\n');
  const contentsIndex =
    `${contentsImports}\n\n${contentsExports}\n\n` +
    `export const contents = {\n${contentsMapEntries}\n} as const;\n`;
  writeFile(outDir, path.join(pkgDir, 'contents', 'index.ts'), contentsIndex);
  const contentsTs =
    `export * from './contents/index';\n` +
    `export { contents } from './contents/index';\n`;
  writeFile(outDir, path.join(pkgDir, 'contents.ts'), contentsTs);

  generateBlueIds(outDir, packageName, pkg);
  Object.entries(schemaFiles).forEach(([relPath, content]) => {
    writeFile(outDir, relPath, content);
  });
  writeFile(outDir, path.join(pkgDir, 'schemas', 'index.ts'), schemaIndexTs);
  writeFile(outDir, path.join(pkgDir, 'schemas.ts'), schemasTs);

  const indexContent =
    `import meta from './meta';\n` +
    `import { contents } from './contents';\n` +
    `import { schemas } from './schemas';\n` +
    `export default { ...meta, contents, schemas } as const;\n` +
    `export { meta, contents, schemas };\n`;
  writeFile(outDir, path.join(pkgDir, 'index.ts'), indexContent);
}

function generateRepository(outDir: string, packageNames: string[]) {
  const packages = packageNames.map((slug) => ({
    slug,
    identifier: toPackageIdentifier(slug),
  }));

  const imports = packages
    .map(
      ({ slug, identifier }) =>
        `import ${identifier} from './packages/${slug}/index';`,
    )
    .join('\n');

  const packageEntries = packages
    .map(({ slug, identifier }) => `    '${slug}': ${identifier},`)
    .join('\n');

  const repositoryContent =
    `${imports}\n` +
    `import { name, repositoryVersions } from './meta';\n` +
    `export const repository = {\n` +
    `  name,\n  repositoryVersions,\n  packages: {\n${packageEntries}\n  },\n} as const;\n` +
    `export default repository;\n`;
  writeFile(outDir, 'repository.ts', repositoryContent);

  const packagesIndex =
    packages
      .map(
        ({ slug, identifier }) =>
          `export { default as ${identifier} } from './${slug}/index';`,
      )
      .join('\n') + '\n';
  writeFile(outDir, 'packages/index.ts', packagesIndex);
}

function generateRootIndex(outDir: string) {
  const content =
    `export { repository } from './repository';\n` +
    `export { name, repositoryVersions } from './meta';\n` +
    `export { default } from './repository';\n`;
  writeFile(outDir, 'index.ts', content);
}

function updatePackageJsonExports(
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

export function generateTypesArtifacts(options: GenerateTypesArtifactsOptions) {
  if (!fs.existsSync(options.sourcePath)) {
    throw new Error(
      `Source BlueRepository.blue not found at ${options.sourcePath}. Set BLUE_REPOSITORY_SOURCE to override.`,
    );
  }

  const document = readRepositorySource(options.sourcePath);
  const { meta, packages } = buildRepositoryArtifacts(document);
  const { perPackage } = compileValueSchemasFromRepository(meta, packages);

  const outDir = path.resolve(options.repoRoot, 'libs/types/src');
  const distDir = path.resolve(options.repoRoot, 'libs/types/dist');
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.rmSync(distDir, { recursive: true, force: true });

  generateMeta(outDir, meta);
  const packageNames = Object.keys(packages);
  packageNames.forEach((name) =>
    generatePackageArtifacts(
      outDir,
      name,
      packages[name],
      perPackage[name]?.perTypeFiles ?? {},
      perPackage[name]?.schemaIndexTs ??
        (() => {
          throw new Error(`Missing generated schemas for package '${name}'`);
        })(),
      perPackage[name]?.schemasTs ??
        (() => {
          throw new Error(`Missing generated schemas for package '${name}'`);
        })(),
    ),
  );
  generateRepository(outDir, packageNames);
  generateRootIndex(outDir);
  updatePackageJsonExports(options.repoRoot, packageNames, meta);
}
