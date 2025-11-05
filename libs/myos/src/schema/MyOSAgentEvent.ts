import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const MyOSAgentEventSchema = withTypeBlueId(blueIds['MyOS Agent Event'])(
  z.object({
    agentId: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    timestamp: z.number().optional(),
  })
);

export type MyOSAgentEvent = z.infer<typeof MyOSAgentEventSchema>;
