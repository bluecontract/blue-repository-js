import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const InitiateTimelineActionSchema = withTypeBlueId(
  blueIds.InitiateTimelineAction
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    owner: z.string().optional(),
  })
);

export type InitiateTimelineAction = z.infer<
  typeof InitiateTimelineActionSchema
>;
