import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const AgentSchema: any = withTypeBlueId(blueIds['MyOS/Agent'])(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Agent = z.infer<typeof AgentSchema>;
