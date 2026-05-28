import { describe, expect, it } from 'vitest';
import { Properties } from '@blue-labs/language';
import { compileValueSchemasFromRepository } from '../lib/zodSchemaCompiler';
import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../lib/repositoryTypesBuilder';

describe('schema compiler special fields', () => {
  it('includes name/description and does not skip contracts', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };

    const packages: Record<string, BlueRepositoryPackage> = {
      sample: {
        name: 'Sample',
        aliases: { 'Sample/Root': 'ROOT' },
        typesMeta: {
          ROOT: { status: 'stable', name: 'Root', versions: [] },
        },
        contents: {
          ROOT: {
            name: 'Root',
            description: 'Root description',
            contracts: {
              someContract: {
                channel: { type: { blueId: Properties.TEXT_TYPE_BLUE_ID } },
                request: { description: 'Any request payload' },
              },
            },
          },
        },
        schemas: {},
      },
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, packages);
    const schemaFiles = perPackage.sample.perTypeFiles;
    const onlyPath = Object.keys(schemaFiles)[0];
    expect(onlyPath).toBeTruthy();
    if (!onlyPath) {
      throw new Error('Expected schema output for Sample/Root');
    }
    const source = schemaFiles[onlyPath];

    expect(source).toContain('name: z.string().optional()');
    expect(source).toContain('description: z.string().optional()');
    expect(source).toContain('contracts: z.object(');
    expect(source).toContain('channel: z.string().optional()');
    expect(source).toContain('request: blueNodeField().optional()');
  });

  it('applies required, enum, and collection schema metadata', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };

    const packages: Record<string, BlueRepositoryPackage> = {
      sample: {
        name: 'Sample',
        aliases: { 'Sample/Root': 'ROOT' },
        typesMeta: {
          ROOT: { status: 'stable', name: 'Root', versions: [] },
        },
        contents: {
          ROOT: {
            name: 'Root',
            count: {
              type: { blueId: Properties.INTEGER_TYPE_BLUE_ID },
              schema: {
                required: {
                  type: { blueId: Properties.BOOLEAN_TYPE_BLUE_ID },
                  value: true,
                },
              },
            },
            status: {
              type: { blueId: Properties.TEXT_TYPE_BLUE_ID },
              schema: {
                enum: {
                  items: [
                    {
                      type: { blueId: Properties.TEXT_TYPE_BLUE_ID },
                      value: 'open',
                    },
                    {
                      type: { blueId: Properties.TEXT_TYPE_BLUE_ID },
                      value: 'closed',
                    },
                  ],
                },
              },
            },
            tags: {
              type: { blueId: Properties.LIST_TYPE_BLUE_ID },
              itemType: { blueId: Properties.TEXT_TYPE_BLUE_ID },
              schema: {
                minItems: {
                  type: { blueId: Properties.INTEGER_TYPE_BLUE_ID },
                  value: 1,
                },
                maxItems: {
                  type: { blueId: Properties.INTEGER_TYPE_BLUE_ID },
                  value: 3,
                },
              },
            },
          },
        },
        schemas: {},
      },
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, packages);
    const schemaFiles = perPackage.sample.perTypeFiles;
    const onlyPath = Object.keys(schemaFiles)[0];
    expect(onlyPath).toBeTruthy();
    if (!onlyPath) {
      throw new Error('Expected schema output for Sample/Root');
    }
    const source = schemaFiles[onlyPath];

    expect(source).toContain('count: z.number()');
    expect(source).not.toContain('count: z.number().optional()');
    expect(source).toContain(
      'status: z.enum(["open","closed"] as [string, ...string[]]).optional()',
    );
    expect(source).toContain('tags: z.array(z.string()).min(1).max(3).optional()');
  });

  it('applies root enum schema metadata', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };

    const packages: Record<string, BlueRepositoryPackage> = {
      sample: {
        name: 'Sample',
        aliases: { 'Sample/RootEnum': 'ROOT_ENUM' },
        typesMeta: {
          ROOT_ENUM: { status: 'stable', name: 'RootEnum', versions: [] },
        },
        contents: {
          ROOT_ENUM: {
            name: 'RootEnum',
            type: { blueId: Properties.TEXT_TYPE_BLUE_ID },
            schema: {
              enum: {
                items: [
                  { type: { blueId: Properties.TEXT_TYPE_BLUE_ID }, value: 'a' },
                  { type: { blueId: Properties.TEXT_TYPE_BLUE_ID }, value: 'b' },
                ],
              },
            },
          },
        },
        schemas: {},
      },
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, packages);
    const schemaFiles = perPackage.sample.perTypeFiles;
    const onlyPath = Object.keys(schemaFiles)[0];
    expect(onlyPath).toBeTruthy();
    if (!onlyPath) {
      throw new Error('Expected schema output for Sample/RootEnum');
    }

    expect(schemaFiles[onlyPath]).toContain(
      'z.enum(["a","b"] as [string, ...string[]]) as unknown as z.ZodObject<any>',
    );
  });
});
