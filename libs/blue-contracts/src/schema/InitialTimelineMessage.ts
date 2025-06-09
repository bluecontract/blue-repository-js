import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const InitialTimelineMessageSchema = withTypeBlueId(
  blueIds['Initial Timeline Message']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type InitialTimelineMessage = z.infer<
  typeof InitialTimelineMessageSchema
>;
