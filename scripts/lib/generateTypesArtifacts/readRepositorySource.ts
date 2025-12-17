import * as fs from 'node:fs';
import yaml from 'js-yaml';
import type {
  BluePackage,
  BlueRepositoryDocument,
} from '../repositoryTypesBuilder/index.js';

export function readRepositorySource(sourcePath: string): BlueRepositoryDocument {
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

