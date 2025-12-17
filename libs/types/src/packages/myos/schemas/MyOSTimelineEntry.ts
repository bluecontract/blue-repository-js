import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineEntrySchema } from '../../conversation/schemas/TimelineEntry';
import { MyOSTimelineSchema } from './MyOSTimeline';

export const MyOSTimelineEntrySchema = withTypeBlueId(
  blueIds['MyOS/MyOS Timeline Entry']
)(
  TimelineEntrySchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    timeline: MyOSTimelineSchema.optional(),
  })
);

export type MyOSTimelineEntry = z.infer<typeof MyOSTimelineEntrySchema>;
