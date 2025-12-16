import { Properties } from '@blue-labs/language';
import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../repositoryTypesBuilder/index.js';
import type {
  BlueId,
  CollectionKind,
  PackageName,
  PrimitiveKind,
  RepoContext,
  TypeInfo,
} from './types.js';

function resolveCoreTypeMap(): Record<string, string> {
  return Properties.CORE_TYPE_NAME_TO_BLUE_ID_MAP as Record<string, string>;
}

export function buildRepoContext(
  meta: BlueRepositoryMeta,
  packages: Record<string, BlueRepositoryPackage>,
): RepoContext {
  const typeIndex = new Map<BlueId, TypeInfo>();
  const toCurrent = new Map<BlueId, BlueId>();
  const aliasToBlueId = new Map<string, BlueId>();

  for (const [pkgName, pkg] of Object.entries(packages)) {
    Object.entries(pkg.aliases || {}).forEach(([alias, blueId]) => {
      aliasToBlueId.set(alias, blueId);
      aliasToBlueId.set(alias.toLowerCase(), blueId);
    });

    Object.entries(pkg.typesMeta).forEach(([blueId, meta]) => {
      typeIndex.set(blueId, {
        packageName: pkgName as PackageName,
        packageDisplayName: pkg.name,
        typeName: meta.name,
        blueId,
        content: pkg.contents[blueId] as Record<string, unknown>,
      });
      if (meta.status === 'stable') {
        for (const version of meta.versions) {
          toCurrent.set(version.typeBlueId, blueId);
        }
        toCurrent.set(blueId, blueId);
      }
    });
  }

  const coreTypeMap = resolveCoreTypeMap();
  const { primitiveKindByBlueId, collectionKindByBlueId } =
    deriveCoreKindMaps(coreTypeMap);

  return {
    meta,
    packages,
    typeIndex,
    toCurrent,
    aliasToBlueId,
    primitiveKindByBlueId,
    collectionKindByBlueId,
  };
}

function deriveCoreKindMaps(coreTypeMap: Record<string, string>): {
  primitiveKindByBlueId: Map<BlueId, PrimitiveKind>;
  collectionKindByBlueId: Map<BlueId, CollectionKind>;
} {
  const primitiveKindByBlueId = new Map<BlueId, PrimitiveKind>();
  const collectionKindByBlueId = new Map<BlueId, CollectionKind>();

  primitiveKindByBlueId.set(coreTypeMap.Text, 'text');
  primitiveKindByBlueId.set(coreTypeMap.Integer, 'integer');
  primitiveKindByBlueId.set(coreTypeMap.Double, 'double');
  primitiveKindByBlueId.set(coreTypeMap.Boolean, 'boolean');

  collectionKindByBlueId.set(coreTypeMap.List, 'list');
  collectionKindByBlueId.set(coreTypeMap.Dictionary, 'dictionary');

  return { primitiveKindByBlueId, collectionKindByBlueId };
}
