import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../repositoryTypesBuilder/index.js';

export type BlueId = string;
export type PackageName = string;
export type PrimitiveKind = 'text' | 'integer' | 'double' | 'boolean';
export type CollectionKind = 'list' | 'dictionary';

export interface CompileValueSchemasResult {
  perPackage: Record<
    string,
    {
      perTypeFiles: Record<string, string>;
      schemaIndexTs: string;
      schemasTs: string;
    }
  >;
}

export interface TypeInfo {
  packageName: PackageName;
  typeName: string;
  blueId: BlueId;
  content: Record<string, unknown>;
}

export interface RepoContext {
  meta: BlueRepositoryMeta;
  packages: Record<string, BlueRepositoryPackage>;
  typeIndex: Map<BlueId, TypeInfo>;
  toCurrent: Map<BlueId, BlueId>;
  aliasToBlueId: Map<string, BlueId>;
  primitiveKindByBlueId: Map<BlueId, PrimitiveKind>;
  collectionKindByBlueId: Map<BlueId, CollectionKind>;
}

export class UnknownTypeReferenceError extends Error {
  constructor(details: {
    fromType: string;
    fromPackage: string;
    atPath: string;
    ref: string;
  }) {
    super(
      `Unknown type reference '${details.ref}' in ${details.fromPackage}/${details.fromType} at '${details.atPath}'`,
    );
    this.name = 'UnknownTypeReferenceError';
  }
}
