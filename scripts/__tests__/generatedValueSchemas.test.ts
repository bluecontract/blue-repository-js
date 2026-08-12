import { beforeAll, describe, expect, it } from 'vitest';
import * as path from 'node:path';
import * as fs from 'node:fs';
import type { ZodTypeAny } from 'zod';
import {
  getFixtureTypesPackage,
} from './testUtils';

describe('generated value schemas', () => {
  let fixture: Awaited<ReturnType<typeof getFixtureTypesPackage>>;

  beforeAll(() => {
    return (async () => {
      fixture = await getFixtureTypesPackage();
    })();
  });

  it('validates simple primitive fields (ChatMessage)', async () => {
    const chatMessage = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation/schemas/ChatMessage'
    );
    const schema = (chatMessage as { ChatMessageSchema: ZodTypeAny }).ChatMessageSchema;
    expect(() => schema.parse({ message: 'hello' })).not.toThrow();
    expect(() => schema.parse({ message: 123 })).toThrow();
  });

  it('validates list fields (CompositeTimelineChannel.channels)', async () => {
    const composite = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/conversation/schemas/CompositeTimelineChannel'
    );
    const schema = (composite as { CompositeTimelineChannelSchema: ZodTypeAny })
      .CompositeTimelineChannelSchema;
    expect(() => schema.parse({ channels: ['alpha', 'beta'] })).not.toThrow();
    expect(() => schema.parse({ channels: [{}, {}] })).toThrow();
  });

  it('validates dictionary value types (DocumentSessionBootstrap.capabilities)', async () => {
    const bootstrap = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/myos/schemas/DocumentSessionBootstrap'
    );
    const schema = (bootstrap as { DocumentSessionBootstrapSchema: ZodTypeAny })
      .DocumentSessionBootstrapSchema;
    expect(() =>
      schema.parse({ capabilities: { orchestration: true, interaction: false } })
    ).not.toThrow();
    expect(() =>
      schema.parse({ capabilities: { orchestration: {} } })
    ).toThrow();
  });

  it('aliases a same-named parent schema from another package', async () => {
    const principalActor = await fixture.importFromTypesPackage(
      '@blue-repository/types/packages/myos/schemas/PrincipalActor'
    );
    const schema = (principalActor as { PrincipalActorSchema: ZodTypeAny })
      .PrincipalActorSchema;

    expect(() =>
      schema.parse({ displayName: 'Alice', accountId: 'account-1' })
    ).not.toThrow();
    expect(() =>
      schema.parse({ displayName: 'Alice', accountId: 1 })
    ).toThrow();

    const source = fixture.readTypesSource(
      'src/packages/myos/schemas/PrincipalActor.ts'
    );
    expect(source).toContain(
      'import { PrincipalActorSchema as BasePrincipalActorSchema }'
    );
    expect(source).toContain('BasePrincipalActorSchema.extend({');
  });

  it('emits clean schema source without legacy builders', () => {
    const chatMessageSource = fs.readFileSync(
      path.join(
        fixture.typesRoot,
        'src/packages/conversation/schemas/ChatMessage.ts'
      ),
      'utf-8'
    );
    expect(chatMessageSource).not.toContain('.strict(');
    expect(chatMessageSource).not.toContain('typeLiteral(');
    expect(chatMessageSource).not.toContain('applyScalarConstraints');
    expect(chatMessageSource).not.toContain('builders[');
  });
});
