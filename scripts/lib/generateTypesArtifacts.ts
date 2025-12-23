import * as fs from 'node:fs';
import * as path from 'node:path';
import { buildRepositoryArtifacts } from './repositoryTypesBuilder/index.js';
import { compileValueSchemasFromRepository } from './zodSchemaCompiler/index.js';
import { readRepositorySource } from './generateTypesArtifacts/readRepositorySource.js';
import { generateMeta } from './generateTypesArtifacts/generateMeta.js';
import { generatePackageArtifacts } from './generateTypesArtifacts/generatePackageArtifacts.js';
import { generateRepository } from './generateTypesArtifacts/generateRepository.js';
import { generateRootIndex } from './generateTypesArtifacts/generateRootIndex.js';
import { updatePackageJsonExports } from './generateTypesArtifacts/updatePackageJsonExports.js';
import { writeTypesReadme } from './generateTypesArtifacts/writeTypesReadme.js';
export { formatGeneratedTypesArtifacts } from './generateTypesArtifacts/formatGeneratedTypesArtifacts.js';

export interface GenerateTypesArtifactsOptions {
  repoRoot: string;
  sourcePath: string;
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
  const typesPackageJson = readTypesPackageJson(options.repoRoot);

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
  updatePackageJsonExports(options.repoRoot, packageNames, meta, typesPackageJson);
  writeTypesReadme(options.repoRoot, {
    packageName: resolveTypesPackageName(typesPackageJson),
    typeModuleName: meta.name,
    typeModuleBlueId: meta.version ?? meta.repositoryVersions.at(-1) ?? '',
  });
}

type TypesPackageJson = {
  name?: string;
  [key: string]: unknown;
};

function readTypesPackageJson(repoRoot: string): TypesPackageJson {
  const pkgPath = path.join(repoRoot, 'libs', 'types', 'package.json');
  if (!fs.existsSync(pkgPath)) {
    throw new Error(`Missing types package.json at ${pkgPath}`);
  }
  return JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) as TypesPackageJson;
}

function resolveTypesPackageName(pkg: TypesPackageJson): string {
  if (typeof pkg.name === 'string' && pkg.name.trim()) {
    return pkg.name;
  }
  return '@blue-repository/types';
}
