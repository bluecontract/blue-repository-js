import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

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
