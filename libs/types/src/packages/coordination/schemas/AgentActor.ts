import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';

export const AgentActorSchema = withTypeBlueId(
  blueIds['Coordination/Agent Actor']
)(
  ActorSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    onBehalfOf: z.lazy(() => ActorSchema).optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
