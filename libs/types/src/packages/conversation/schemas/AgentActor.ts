import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';

export const AgentActorSchema = withTypeBlueId(
  blueIds['Conversation/Agent Actor']
)(
  ActorSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: ActorSchema.optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
