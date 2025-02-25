import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

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
