import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentActorSchema } from '../../conversation/schemas/AgentActor';

export const MyOSAgentActorSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Actor']
)(
  AgentActorSchema.extend({
    accountId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSAgentActor = z.infer<typeof MyOSAgentActorSchema>;
