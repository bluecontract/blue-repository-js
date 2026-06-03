import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const MyOSAgentEventSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Event']
)(
  zod.object({
    agentId: zod.string().optional(),
    description: zod.string().optional(),
    event: blueNodeField().optional(),
    id: zod.string().optional(),
    name: zod.string().optional(),
    timestamp: zod.number().optional(),
  })
);

export type MyOSAgentEvent = z.infer<typeof MyOSAgentEventSchema>;
