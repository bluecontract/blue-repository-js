import { describe, expect, it } from 'vitest';
import { compileValueSchemasFromRepository } from '../lib/zodSchemaCompiler';
import { Properties } from '@blue-labs/language';
import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../lib/repositoryTypesBuilder';

describe('core primitive resolution', () => {
  it('uses language core ids without relying on aliases', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };

    const corePackage: BlueRepositoryPackage = {
      name: 'core',
      aliases: {},
      typesMeta: {
        TEXT_ID: { status: 'stable', name: 'Text', versions: [] },
      },
      contents: {
        TEXT_ID: { name: 'Text' },
      },
      schemas: {},
    };

    const samplePackage: BlueRepositoryPackage = {
      name: 'sample',
      aliases: { 'sample/CollectionUser': 'USER' },
      typesMeta: {
        USER: { status: 'stable', name: 'CollectionUser', versions: [] },
      },
      contents: {
        USER: {
          name: 'CollectionUser',
          type: { blueId: Properties.LIST_TYPE_BLUE_ID },
          itemType: { type: { blueId: Properties.TEXT_TYPE_BLUE_ID } },
        },
      },
      schemas: {},
    };

    expect(() =>
      compileValueSchemasFromRepository(meta, {
        core: corePackage,
        sample: samplePackage,
      })
    ).not.toThrow();
  });

  it('accepts runtime built-ins as core-less base and field references', () => {
    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };

    const markerId =
      Properties.BLUE_CONTRACTS_RUNTIME_TYPE_NAME_TO_BLUE_ID_MAP.Marker;
    const channelId =
      Properties.BLUE_CONTRACTS_RUNTIME_TYPE_NAME_TO_BLUE_ID_MAP.Channel;

    const samplePackage: BlueRepositoryPackage = {
      name: 'sample',
      aliases: { 'sample/Actor Policy': 'ACTOR_POLICY' },
      typesMeta: {
        ACTOR_POLICY: {
          status: 'stable',
          name: 'Actor Policy',
          versions: [],
        },
      },
      contents: {
        ACTOR_POLICY: {
          name: 'Actor Policy',
          type: { blueId: markerId },
          policyChannel: { type: { blueId: channelId } },
        },
      },
      schemas: {},
    };

    const { perPackage } = compileValueSchemasFromRepository(meta, {
      sample: samplePackage,
    });
    const source =
      perPackage.sample.perTypeFiles['packages/sample/schemas/ActorPolicy.ts'];

    expect(source).toContain('zod.object(');
    expect(source).toContain('policyChannel: blueNodeField().optional()');
  });
});
