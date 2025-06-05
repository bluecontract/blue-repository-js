import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const MyOSAgentSchema = withTypeBlueId(blueIds.MyOSAgent)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    agentId: z.string().optional(),
  })
);

export type MyOSAgent = z.infer<typeof MyOSAgentSchema>;
