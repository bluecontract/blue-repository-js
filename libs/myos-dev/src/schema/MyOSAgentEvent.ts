import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const MyOSAgentEventSchema = withTypeBlueId(blueIds['MyOS Agent Event'])(
  z.object({
    agentId: z.unknown().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    id: z.unknown().optional(),
    name: z.string().optional(),
    timestamp: z.unknown().optional(),
  })
);

export type MyOSAgentEvent = z.infer<typeof MyOSAgentEventSchema>;
