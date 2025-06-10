import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TimelineSchema = withTypeBlueId(blueIds['Timeline'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    timelineId: z.string().optional(),
  })
);

export type Timeline = z.infer<typeof TimelineSchema>;
