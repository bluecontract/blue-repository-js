import * as fs from 'node:fs';
import * as path from 'node:path';
import { buildRepositoryArtifacts } from './repositoryTypesBuilder/index.js';
import { compileValueSchemasFromRepository } from './zodSchemaCompiler/index.js';
import packageJson from '../../libs/types/package.json' with { type: 'json' };
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
  writeTypesReadme(options.repoRoot, {
    packageName: packageJson.name,
    typeModuleName: meta.name,
    typeModuleBlueId: meta.version ?? meta.repositoryVersions.at(-1) ?? '',
  });
}
