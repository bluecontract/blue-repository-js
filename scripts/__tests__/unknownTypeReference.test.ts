import { describe, expect, it } from 'vitest';
import {
  compileValueSchemasFromRepository,
  UnknownTypeReferenceError,
} from '../lib/zodSchemaCompiler';
import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../lib/repositoryTypesBuilder';

describe('unknown type references', () => {
  it('throws when referenced blueId is not known', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: ['v1'],
      version: 'v1',
      repoVersionIndexById: { v1: 0 },
    };

    const packages: Record<string, BlueRepositoryPackage> = {
      sample: {
        name: 'sample',
        aliases: {},
        typesMeta: {
          REALID: {
            status: 'stable',
            name: 'Broken',
            versions: [{ repositoryVersionIndex: 0, typeBlueId: 'REALID', attributesAdded: [] }],
          },
        },
        contents: {
          REALID: {
            name: 'Broken',
            field: {
              type: { blueId: 'UNKNOWN' },
            },
          },
        },
        schemas: {},
      },
    };

    expect(() => compileValueSchemasFromRepository(meta, packages)).toThrow(
      UnknownTypeReferenceError
    );
  });
});
