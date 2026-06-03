import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';

const zod = z as any;

export const AgentActorSchema: any = withTypeBlueId(
  blueIds['Coordination/Agent Actor']
)(
  ActorSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.lazy(() => ActorSchema).optional(),
  })
);

export type AgentActor = z.infer<typeof AgentActorSchema>;
