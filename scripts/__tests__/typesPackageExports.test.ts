import { beforeAll, describe, expect, it } from 'vitest';
import * as path from 'node:path';
import * as fs from 'node:fs';
import type { ZodTypeAny } from 'zod';
import {
  getFixtureTypesPackage,
} from './testUtils';

describe('@blue-repository/types package layout', () => {
  let fixture: Awaited<ReturnType<typeof getFixtureTypesPackage>>;

  beforeAll(() => {
    return (async () => {
      fixture = await getFixtureTypesPackage();
    })();
  });

  it('defines required exports map entries', () => {
    const pkgJson = JSON.parse(
      fs.readFileSync(path.join(fixture.typesRoot, 'package.json'), 'utf-8')
    );

    const exportsMap = pkgJson.exports;
    expect(exportsMap['./meta']).toBeTruthy();
    expect(exportsMap['./repository']).toBeTruthy();
    expect(exportsMap['./packages']).toBeTruthy();
    expect(exportsMap['./packages/*']).toBeTruthy();
    expect(exportsMap['./packages/*/meta']).toBeTruthy();
    expect(exportsMap['./packages/*/contents']).toBeTruthy();
    expect(exportsMap['./packages/conversation/contents/*']).toBeTruthy();
    expect(exportsMap['./packages/*/schemas']).toBeTruthy();
    expect(exportsMap['./packages/conversation/schemas/*']).toBeTruthy();
    expect(exportsMap['./packages/super-cool-package/contents/*']).toBeTruthy();
    expect(exportsMap['./packages/super-cool-package/schemas/*']).toBeTruthy();
  });

  it('writes package README with repository info', () => {
    const readme = fs.readFileSync(
      path.join(fixture.typesRoot, 'README.md'),
      'utf-8'
    );
    expect(readme).toContain('# @blue-repository/types');
    expect(readme).toContain('RepoBlueId: **R0**');
  });

  it('exposes meta without contents or schemas', async () => {
    const meta = await fixture.importFromTypesPackage(
      '@blue-repository/types/meta'
    ) as {
      name?: unknown;
      repositoryVersions?: unknown;
      version?: unknown;
      repoVersionIndexById?: unknown;
      contents?: unknown;
    };
    expect(meta.name).toBeDefined();
    expect(meta.repositoryVersions).toBeInstanceOf(Array);
    expect(meta.version).toBeUndefined();
    expect(meta.repoVersionIndexById).toBeUndefined();
    expect(meta.contents).toBeUndefined();
  });

  it('exposes package meta without heavy fields', async () => {
    const coreMeta = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/core/meta'
    ) as {
      default: {
        aliases?: unknown;
        contents?: unknown;
        schemas?: unknown;
      };
    };
    expect(coreMeta.default.aliases).toBeTruthy();
    expect(coreMeta.default.contents).toBeUndefined();
    expect(coreMeta.default.schemas).toBeUndefined();
  });

  it('package default export contains contents and schemas array', async () => {
    const core = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/core'
    ) as { default: { contents?: unknown; schemas?: unknown } };
    expect(core.default.contents).toBeTruthy();
    expect(core.default.schemas).toBeTruthy();
  });

  it('package schemas export only schemas and no contents/meta bleed', async () => {
    const coreSchemas = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/core/schemas'
    ) as { schemas?: unknown; contents?: unknown };
    expect(coreSchemas.schemas).toBeDefined();
    expect(coreSchemas.contents).toBeUndefined();
  });

  it('repository export wires packages together', async () => {
    const repository = await fixture.importFromTypesPackage(
      '@blue-repository/types/repository'
    ) as { repository: { packages?: Record<string, unknown> } };
    expect(repository.repository.packages).toHaveProperty('core');
    const root = await fixture.importFromTypesPackage('@blue-repository/types');
    const rootRepository = (root as { repository?: { packages?: Record<string, unknown> } })
      .repository;
    expect(rootRepository).toBeDefined();
    expect(rootRepository?.packages).toHaveProperty('core');
  });

  it('repository export matches contract shape without derived indexes', async () => {
    const repository = await fixture.importFromTypesPackage(
      '@blue-repository/types/repository'
    ) as { repository: { version?: unknown; repoVersionIndexById?: unknown } };
    expect(repository.repository.version).toBeUndefined();
    expect(repository.repository.repoVersionIndexById).toBeUndefined();
  });

  it('allows importing a single schema path', async () => {
    const blueIdsModule = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation/blue-ids'
    ) as { blueIds: Record<string, string> };
    const ChatMessage = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation/schemas/ChatMessage'
    ) as { ChatMessageSchema?: ZodTypeAny };
    expect(ChatMessage.ChatMessageSchema).toBeDefined();
    const sample = {
      message: 'hello',
    };
    expect(() => ChatMessage.ChatMessageSchema?.parse(sample)).not.toThrow();
    expect(blueIdsModule.blueIds['Conversation/Chat Message']).toBeDefined();
  });

  it('allows importing a single contents path', async () => {
    const contentModule = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation/contents/ChatMessage'
    ) as { ChatMessage?: { name?: string } };
    expect(contentModule.ChatMessage).toBeDefined();
    expect(contentModule.ChatMessage?.name).toBe('Chat Message');
  });

  it('allows importing package root', async () => {
    const conversation = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation'
    ) as { default: { contents?: unknown; schemas?: unknown } };
    expect(conversation.default.contents).toBeDefined();
    expect(conversation.default.schemas).toBeDefined();
  });

  it('built output does not reference legacy packages', () => {
    const banned = [
      '@blue-repository/core',
      '@blue-repository/conversation',
      '@blue-repository/myos',
      '@blue-repository/paynote',
      '@blue-repository/pay-note',
      '@blue-repository/core-dev',
      '@blue-repository/myos-dev',
    ];
    const distRoot = fixture.typesDistRoot;

    const collect = (dir: string): string[] => {
      const files: string[] = [];
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          files.push(...collect(full));
        } else if (entry.isFile() && full.endsWith('.js')) {
          files.push(full);
        }
      }
      return files;
    };

    const files = collect(distRoot);
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8');
      for (const bannedImport of banned) {
        expect(content.includes(bannedImport)).toBe(false);
      }
    }
  });
});
