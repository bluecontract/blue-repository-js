import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const TimelineEntrySchema = withTypeBlueId(blueIds['Timeline Entry'])(
  z.object({
    name: z.string().optional(),
    threadPrev: blueNodeField().optional(),
    signature: z.string().optional(),
    timeline: blueNodeField().optional(),
    thread: blueNodeField().optional(),
    timelinePrev: blueNodeField().optional(),
    message: blueNodeField().optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
