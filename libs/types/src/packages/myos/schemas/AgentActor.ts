import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '../../coordination/schemas/Actor';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';

export const AgentActorSchema = withTypeBlueId(blueIds['MyOS/Agent Actor'])(
  ActorSchema.extend({
    agentRef: z.lazy(() => MyOSDocumentSessionReferenceSchema).optional(),
    delegation: z.lazy(() => MyOSDocumentSessionReferenceSchema).optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
