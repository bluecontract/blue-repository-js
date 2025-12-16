import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSTimelineSchema } from './MyOSTimeline';
import { TimelineEntrySchema } from '../../conversation/schemas/TimelineEntry';

export const MyOSTimelineEntrySchema = withTypeBlueId(blueIds['MyOS/MyOS Timeline Entry'])(
  TimelineEntrySchema.extend({
    "timeline": MyOSTimelineSchema.optional()
  })
);

export type MyOSTimelineEntry = z.infer<typeof MyOSTimelineEntrySchema>;
