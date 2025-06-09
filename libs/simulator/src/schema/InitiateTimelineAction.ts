import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const InitiateTimelineActionSchema = withTypeBlueId(
  blueIds['Initiate Timeline Action']
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
