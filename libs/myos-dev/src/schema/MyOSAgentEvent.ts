import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const MyOSAgentEventSchema = withTypeBlueId(blueIds['MyOS Agent Event'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    agentId: z.string().optional(),
    id: z.number().optional(),
    event: blueNodeField().optional(),
    timestamp: z.number().optional(),
  })
);

export type MyOSAgentEvent = z.infer<typeof MyOSAgentEventSchema>;
