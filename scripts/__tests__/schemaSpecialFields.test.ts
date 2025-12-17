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
    const [onlyPath] = Object.keys(schemaFiles);
    expect(onlyPath).toBeTruthy();
    const source = schemaFiles[onlyPath!];

    expect(source).toContain('name: z.string().optional()');
    expect(source).toContain('description: z.string().optional()');
    expect(source).toContain('contracts: z.object(');
    expect(source).toContain('channel: z.string().optional()');
    expect(source).toContain('request: blueNodeField().optional()');
  });

  it('ignores schema metadata and emits integer as z.number()', () => {
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
              schema: { required: true, min: 1 },
            },
          },
        },
        schemas: {},
      },
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, packages);
    const schemaFiles = perPackage.sample.perTypeFiles;
    const [onlyPath] = Object.keys(schemaFiles);
    expect(onlyPath).toBeTruthy();
    const source = schemaFiles[onlyPath!];

    expect(source).toContain('count: z.number().optional()');
  });
});
