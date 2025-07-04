import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSAgentSchema = withTypeBlueId(blueIds['MyOS Agent'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    agentId: z.string().optional(),
  })
);

export type MyOSAgent = z.infer<typeof MyOSAgentSchema>;
