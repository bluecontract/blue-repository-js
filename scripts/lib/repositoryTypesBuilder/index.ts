import {
  validateNoCycles,
  validateStableDoesNotDependOnDev,
} from '../repository-contract/src';
import { buildMeta } from './meta.js';
import { buildPackages } from './packages.js';
import type {
  BlueRepository,
  BlueRepositoryDocument,
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from './types.js';

export function buildRepositoryArtifacts(document: BlueRepositoryDocument): {
  meta: BlueRepositoryMeta;
  packages: Record<string, BlueRepositoryPackage>;
} {
  const meta = buildMeta(document);
  const packages = buildPackages(document);
  const repository = {
    name: meta.name,
    repositoryVersions: meta.repositoryVersions,
    packages,
  };
  validateNoCycles(repository);
  validateStableDoesNotDependOnDev(repository);
  return { meta, packages };
}

export function buildRepository(document: BlueRepositoryDocument): BlueRepository {
  const { meta, packages } = buildRepositoryArtifacts(document);
  return {
    name: meta.name,
    repositoryVersions: meta.repositoryVersions,
    packages,
  };
}

export * from './types.js';
