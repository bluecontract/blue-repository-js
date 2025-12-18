import type {
  BluePackage as ContractBluePackage,
  BlueRepository as ContractBlueRepository,
  BlueRepositoryDocument as ContractBlueRepositoryDocument,
  BlueRepositoryPackage as ContractBlueRepositoryPackage,
  BlueTypeMetadata as ContractBlueTypeMetadata,
  BlueTypeVersion as ContractBlueTypeVersion,
} from '../repository-contract/src';

export type BlueTypeVersion = ContractBlueTypeVersion;
export type BlueTypeMetadata = ContractBlueTypeMetadata<Record<string, unknown>>;
export type BluePackage = ContractBluePackage<Record<string, unknown>>;
export type BlueRepositoryDocument =
  ContractBlueRepositoryDocument<Record<string, unknown>>;

export interface BlueRepositoryMeta {
  name: string;
  repositoryVersions: readonly string[];
  version: string;
  repoVersionIndexById: Record<string, number>;
}

export type BlueRepositoryPackage = ContractBlueRepositoryPackage<
  Record<string, unknown>
>;

export type BlueRepository = ContractBlueRepository<Record<string, unknown>>;
