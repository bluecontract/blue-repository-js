export type {
  BluePackage,
  BlueRepository,
  BlueRepositoryDocument,
  BlueRepositoryPackage,
  BlueTypeMetadata,
  BlueTypeVersion,
} from '@blue-labs/repository-contract';

export interface BlueRepositoryMeta {
  name: string;
  repositoryVersions: readonly string[];
  version: string;
  repoVersionIndexById: Record<string, number>;
}
