import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSAgentSchema: any = withTypeBlueId(blueIds['MyOS/MyOS Agent'])(
  zod.object({
    agentId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSAgent = z.infer<typeof MyOSAgentSchema>;
