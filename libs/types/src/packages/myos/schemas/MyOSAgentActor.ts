import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentActorSchema } from '../../coordination/schemas/AgentActor';

const zod = z as any;

export const MyOSAgentActorSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Actor']
)(
  AgentActorSchema.extend({
    accountId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSAgentActor = z.infer<typeof MyOSAgentActorSchema>;
