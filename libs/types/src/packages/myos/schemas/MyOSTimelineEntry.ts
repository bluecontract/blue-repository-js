import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineEntrySchema } from '../../coordination/schemas/TimelineEntry';
import { MyOSTimelineSchema } from './MyOSTimeline';

const zod = z as any;

export const MyOSTimelineEntrySchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Timeline Entry']
)(
  TimelineEntrySchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    timeline: zod.lazy(() => MyOSTimelineSchema).optional(),
  })
);

export type MyOSTimelineEntry = z.infer<typeof MyOSTimelineEntrySchema>;
