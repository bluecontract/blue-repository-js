import type { BlueRepositoryDocument, BlueRepositoryMeta } from './types.js';

export function buildMeta(document: BlueRepositoryDocument): BlueRepositoryMeta {
  const repoVersionIndexById = Object.fromEntries(
    (document.repositoryVersions || []).map((id, index) => [id, index]),
  );

  const version = document.repositoryVersions.at(-1) ?? '';

  return {
    name: document.name,
    repositoryVersions: [...document.repositoryVersions],
    version,
    repoVersionIndexById,
  };
}
