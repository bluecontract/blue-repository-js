import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AgentSchema = withTypeBlueId(blueIds['Agent'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type Agent = z.infer<typeof AgentSchema>;
