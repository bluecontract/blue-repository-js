import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AgentSchema = withTypeBlueId(blueIds['MyOS/Agent'])(
  z.object({})
);

export type Agent = z.infer<typeof AgentSchema>;
