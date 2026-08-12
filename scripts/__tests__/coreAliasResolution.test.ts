import { describe, expect, it } from 'vitest';
import { compileValueSchemasFromRepository } from '../lib/zodSchemaCompiler';
import { Properties } from '@blue-labs/language';
import type {
  BlueRepositoryMeta,
  BlueRepositoryPackage,
} from '../lib/repositoryTypesBuilder';
import {
  BLUE_CONTRACTS_RUNTIME_REGISTRY_PACKAGE_IDENTITY,
  CONTRACTS_RUNTIME_BLUE_IDS_BY_KEY,
} from '../lib/registry/contractsRuntimeRegistry';

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

  it('accepts production runtime BlueIds from the verified Contracts registry', () => {
    expect(BLUE_CONTRACTS_RUNTIME_REGISTRY_PACKAGE_IDENTITY).toBe(
      'sha256:46a7744c1cbfa4b00e1d8a99f6ca3f0089ef697de968fee08547894ab02b0ca1'
    );
    expect(CONTRACTS_RUNTIME_BLUE_IDS_BY_KEY.size).toBe(24);

    const markerId = CONTRACTS_RUNTIME_BLUE_IDS_BY_KEY.get('Marker');
    const channelId = CONTRACTS_RUNTIME_BLUE_IDS_BY_KEY.get('Channel');
    expect(markerId).toBe('8nWeksYEXxp5TBnRcYF5u3VsFHvMfxo4zjAFT6MLW8ZD');
    expect(channelId).toBe('CaFMD5Tpz4LbGjJsftT3465hKBWa7Ti6dutYHnCSRQyR');

    const meta: BlueRepositoryMeta = {
      name: 'repo',
      repositoryVersions: [],
      version: '',
      repoVersionIndexById: {},
    };
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

    expect(() =>
      compileValueSchemasFromRepository(meta, { sample: samplePackage })
    ).not.toThrow();
  });
});
