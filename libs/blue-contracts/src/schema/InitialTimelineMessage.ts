import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const InitialTimelineMessageSchema = withTypeBlueId(
  blueIds.InitialTimelineMessage
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type InitialTimelineMessage = z.infer<
  typeof InitialTimelineMessageSchema
>;
