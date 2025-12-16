import { describe, expect, it } from 'vitest';
import {
  buildRepository,
  buildRepositoryArtifacts,
  BlueRepositoryDocument,
} from '../lib/repositoryTypesBuilder';

const sampleDocument: BlueRepositoryDocument = {
  name: 'repo.blue',
  repositoryVersions: ['R0', 'R1', 'R2'],
  packages: [
    {
      name: 'core',
      types: [
        {
          status: 'stable',
          content: { name: 'Text' },
          versions: [
            {
              repositoryVersionIndex: 0,
              typeBlueId: 'text-v0',
              attributesAdded: [],
            },
          ],
        },
        {
          status: 'stable',
          content: { name: 'Rule', severity: {} },
          versions: [
            {
              repositoryVersionIndex: 0,
              typeBlueId: 'rule-v0',
              attributesAdded: [],
            },
            {
              repositoryVersionIndex: 2,
              typeBlueId: 'rule-v2',
              attributesAdded: ['/severity'],
            },
          ],
        },
        {
          status: 'dev',
          content: { name: 'Draft' },
          versions: [
            {
              repositoryVersionIndex: 2,
              typeBlueId: 'draft-dev',
              attributesAdded: [],
            },
          ],
        },
      ],
    },
  ],
};

describe('repositoryTypesBuilder', () => {
  it('builds meta and packages for artifacts', () => {
    const { packages } = buildRepositoryArtifacts(sampleDocument);

    const core = packages.core;
    expect(core.aliases['core/Text']).toEqual('text-v0');
    expect(core.aliases['core/Rule']).toEqual('rule-v2');
    expect(core.aliases['core/Draft']).toEqual('draft-dev');

    expect(core.contents['rule-v2']).toEqual({ name: 'Rule', severity: {} });
  });

  it('builds repository object', () => {
    const repository = buildRepository(sampleDocument);
    expect(repository.repositoryVersions).toEqual(['R0', 'R1', 'R2']);
    expect(repository.packages.core.aliases['core/Text']).toEqual('text-v0');
  });

  it('sorts versions and keeps latest current blueId', () => {
    const document = {
      name: 'repo.blue',
      repositoryVersions: ['R0', 'R1'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Rule', severity: {} },
              versions: [
                {
                  repositoryVersionIndex: 1,
                  typeBlueId: 'rule-v1',
                  attributesAdded: ['/severity'],
                },
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'rule-v0',
                  attributesAdded: [],
                },
              ],
            },
          ],
        },
      ],
    } satisfies BlueRepositoryDocument;

    const { packages } = buildRepositoryArtifacts(document);
    const ruleMeta = packages.core.typesMeta['rule-v1'];

    expect(ruleMeta.versions[0].repositoryVersionIndex).toBe(0);
    expect(ruleMeta.versions[1].repositoryVersionIndex).toBe(1);
  });

  it('rejects invalid pointers', () => {
    const badDocument: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Broken' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'broken',
                  attributesAdded: ['/items/0/oops'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(badDocument)).toThrowError();
  });

  it('rejects pointers into reserved schema nodes', () => {
    const badDocument: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Broken' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'broken',
                  attributesAdded: ['/schema/min'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(badDocument)).toThrowError();
  });

  it('accepts itemType nested pointers', () => {
    const document: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0', 'R1'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: {
                name: 'InlineList',
                prop: { list: { itemType: { prop2: {} } } },
              },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'list-v0',
                  attributesAdded: [],
                },
                {
                  repositoryVersionIndex: 1,
                  typeBlueId: 'list-v1',
                  attributesAdded: ['/prop/list/itemType/prop2'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(document)).not.toThrow();
  });

  it('accepts valueType nested pointers', () => {
    const document: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0', 'R1'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: {
                name: 'InlineDict',
                prop: { dict: { valueType: { prop2: {} } } },
              },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'dict-v0',
                  attributesAdded: [],
                },
                {
                  repositoryVersionIndex: 1,
                  typeBlueId: 'dict-v1',
                  attributesAdded: ['/prop/dict/valueType/prop2'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(document)).not.toThrow();
  });

  it('rejects duplicate type names within a package', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Dup' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'dup-1',
                  attributesAdded: [],
                },
              ],
            },
            {
              status: 'stable',
              content: { name: 'Dup' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'dup-2',
                  attributesAdded: [],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).toThrow(/Duplicate type name/);
  });

  it('rejects stable types that depend on dev types', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'dev',
              content: { name: 'Draft' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'draft-dev',
                  attributesAdded: [],
                },
              ],
            },
            {
              status: 'stable',
              content: {
                name: 'Stable',
                child: { type: { blueId: 'draft-dev' } },
              },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'stable-v0',
                  attributesAdded: [],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).toThrow(/depends on dev type/i);
  });

  it('rejects stable types that depend on dev types across packages', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'pkgA',
          types: [
            {
              status: 'stable',
              content: {
                name: 'StableA',
                child: { type: { blueId: 'dev-blue-id' } },
              },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'stable-a',
                  attributesAdded: [],
                },
              ],
            },
          ],
        },
        {
          name: 'pkgB',
          types: [
            {
              status: 'dev',
              content: { name: 'DevB' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'dev-blue-id',
                  attributesAdded: [],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).toThrow(/depends on dev type/i);
  });

  it('rejects pointers to missing content paths', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Missing', present: {} },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'missing',
                  attributesAdded: ['/absent'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).toThrow(
      /Segment 'absent' does not exist/
    );
  });

  it('rejects descendant introduced before ancestor', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0', 'R1'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Order', a: { b: {} } },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'order-v0',
                  attributesAdded: ['/a/b'],
                },
                {
                  repositoryVersionIndex: 1,
                  typeBlueId: 'order-v1',
                  attributesAdded: ['/a'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).toThrow(/ancestor.*descendant/i);
  });

  it('rejects pointers targeting scalars or payload keys or required schemas', () => {
    const docScalar: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Scalar', scalar: 'x' },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'scalar',
                  attributesAdded: ['/scalar'],
                },
              ],
            },
          ],
        },
      ],
    };
    expect(() => buildRepositoryArtifacts(docScalar)).toThrow(
      /breaking change/
    );

    const docValue: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Value', field: { value: 1 } },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'value',
                  attributesAdded: ['/field'],
                },
              ],
            },
          ],
        },
      ],
    };
    expect(() => buildRepositoryArtifacts(docValue)).toThrow(/breaking change/);

    const docRequired: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Req', field: { schema: { required: true } } },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'req',
                  attributesAdded: ['/field'],
                },
              ],
            },
          ],
        },
      ],
    };
    expect(() => buildRepositoryArtifacts(docRequired)).toThrow(
      /breaking change/
    );
  });

  it('allows optional schema additions', () => {
    const doc: BlueRepositoryDocument = {
      name: 'repo.blue',
      repositoryVersions: ['R0'],
      packages: [
        {
          name: 'core',
          types: [
            {
              status: 'stable',
              content: { name: 'Ok', field: { schema: { required: false } } },
              versions: [
                {
                  repositoryVersionIndex: 0,
                  typeBlueId: 'ok',
                  attributesAdded: ['/field'],
                },
              ],
            },
          ],
        },
      ],
    };

    expect(() => buildRepositoryArtifacts(doc)).not.toThrow();
  });
});
