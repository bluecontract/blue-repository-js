import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

export const MyOSAgentEventSchema = withTypeBlueId(blueIds['MyOS/MyOS Agent Event'])(
  z.object({
    "agentId": z.string().optional(),
    "id": z.string().optional(),
    "timestamp": z.number().int().optional(),
    "event": blueNodeField().optional()
  })
);

export type MyOSAgentEvent = z.infer<typeof MyOSAgentEventSchema>;
