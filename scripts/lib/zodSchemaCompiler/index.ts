import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../repositoryTypesBuilder/index.js';
import { buildRepoContext } from './context.js';
import { PackageSchemaBuilder } from './packageSchemaBuilder.js';
import type { CompileValueSchemasResult } from './types.js';

export function compileValueSchemasFromRepository(
  meta: BlueRepositoryMeta,
  packages: Record<string, BlueRepositoryPackage>,
): CompileValueSchemasResult {
  const ctx = buildRepoContext(meta, packages);
  const perPackage: CompileValueSchemasResult['perPackage'] = {};

  for (const [packageName, pkg] of Object.entries(packages)) {
    const builder = new PackageSchemaBuilder(packageName, pkg, ctx);
    perPackage[packageName] = builder.build();
  }

  return { perPackage };
}

export { UnknownTypeReferenceError } from './types.js';
export type { CompileValueSchemasResult } from './types.js';
