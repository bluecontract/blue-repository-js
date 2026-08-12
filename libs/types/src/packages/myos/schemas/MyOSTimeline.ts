import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineSchema } from '../../coordination/schemas/Timeline';

const zod = z as any;

export const MyOSTimelineSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Timeline']
)(
  TimelineSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSTimeline = z.infer<typeof MyOSTimelineSchema>;
