import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '../../conversation/schemas/Actor';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';

export const AgentActorSchema = withTypeBlueId(blueIds['MyOS/Agent Actor'])(
  ActorSchema.extend({
    "onBehalfOf": z.string().optional(),
    "agentRef": MyOSDocumentSessionReferenceSchema.optional(),
    "delegation": MyOSDocumentSessionReferenceSchema.optional()
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
