import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '@blue-repository/core-dev';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';

export const AgentActorSchema = withTypeBlueId(blueIds['Agent Actor'])(
  ActorSchema.extend({
    agentRef: MyOSDocumentSessionReferenceSchema.optional(),
    delegation: MyOSDocumentSessionReferenceSchema.optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
