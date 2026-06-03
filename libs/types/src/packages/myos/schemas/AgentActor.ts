import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from '../../coordination/schemas/Actor';
import { MyOSDocumentSessionReferenceSchema } from './MyOSDocumentSessionReference';

const zod = z as any;

export const AgentActorSchema: any = withTypeBlueId(
  blueIds['MyOS/Agent Actor']
)(
  ActorSchema.extend({
    agentRef: zod.lazy(() => MyOSDocumentSessionReferenceSchema).optional(),
    delegation: zod.lazy(() => MyOSDocumentSessionReferenceSchema).optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.string().optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
