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

  it('resolves this# placeholders inside cyclic type groups', () => {
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
          'GROUP#0': {
            status: 'stable',
            name: 'Alpha',
            versions: [
              {
                repositoryVersionIndex: 0,
                typeBlueId: 'GROUP#0',
                attributesAdded: [],
              },
            ],
          },
          'GROUP#1': {
            status: 'stable',
            name: 'Beta',
            versions: [
              {
                repositoryVersionIndex: 0,
                typeBlueId: 'GROUP#1',
                attributesAdded: [],
              },
            ],
          },
        },
        contents: {
          'GROUP#0': {
            name: 'Alpha',
            next: {
              type: { blueId: 'this#1' },
            },
          },
          'GROUP#1': {
            name: 'Beta',
            previous: {
              type: { blueId: 'this#0' },
            },
          },
        },
        schemas: {},
      },
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, packages);
    const source = perPackage.sample.perTypeFiles['packages/sample/schemas/Alpha.ts'];

    expect(source).toContain("import { BetaSchema } from './Beta';");
    expect(source).toContain(
      'next: z.lazy((): z.ZodTypeAny => BetaSchema).optional()',
    );
  });
});
