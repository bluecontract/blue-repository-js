import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { TimelineSchema } from './Timeline';

export const TimelineEntrySchema = withTypeBlueId(blueIds['Timeline Entry'])(
  z.object({
    message: blueNodeField().optional(),
    name: z.string().optional(),
    signature: z.string().optional(),
    thread: blueNodeField().optional(),
    threadPrev: blueNodeField().optional(),
    timeline: TimelineSchema.optional(),
    timelinePrev: blueNodeField().optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
