import * as fs from 'node:fs';
import yaml from 'js-yaml';
import type { JsonValue } from '@blue-labs/shared-utils';
import type {
  BluePackage,
  BlueRepositoryDocument,
} from '../repositoryTypesBuilder/index.js';

export function readRepositorySource(sourcePath: string): BlueRepositoryDocument {
  const raw = fs.readFileSync(sourcePath, 'utf-8');
  const parsed = yaml.load(raw) as unknown;
  const root = isRecord(parsed) ? parsed : {};

  const packages: BluePackage[] = toArray(root.packages).map((pkg) => {
    const pkgRecord = isRecord(pkg) ? pkg : {};
    const types = toArray(pkgRecord.types).map((type) => {
      const typeRecord = isRecord(type) ? type : {};
      const versions = toArray(typeRecord.versions).map((version) => {
        const versionRecord = isRecord(version) ? version : {};
        return {
          repositoryVersionIndex: versionRecord.repositoryVersionIndex as number,
          typeBlueId: versionRecord.typeBlueId as string,
          attributesAdded: toStringArray(versionRecord.attributesAdded),
        };
      });
      return {
        status: typeRecord.status as BluePackage['types'][number]['status'],
        content: typeRecord.content as JsonValue,
        versions,
      };
    });
    return {
      name: typeof pkgRecord.name === 'string' ? pkgRecord.name : '',
      types,
    };
  });

  return {
    name: typeof root.name === 'string' ? root.name : 'unknown',
    repositoryVersions: toStringArray(root.repositoryVersions),
    packages,
  };
}

function toArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === 'string')
    : [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
