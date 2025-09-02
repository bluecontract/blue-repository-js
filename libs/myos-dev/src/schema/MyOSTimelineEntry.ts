import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineEntrySchema } from '@blue-repository/core-dev';
import { MyOSTimelineSchema } from './MyOSTimeline';

export const MyOSTimelineEntrySchema = withTypeBlueId(
  blueIds['MyOS Timeline Entry']
)(
  TimelineEntrySchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    timeline: MyOSTimelineSchema.optional(),
    timestamp: z.number().optional(),
  })
);

export type MyOSTimelineEntry = z.infer<typeof MyOSTimelineEntrySchema>;
