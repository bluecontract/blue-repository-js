import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineSchema } from '@blue-repository/conversation';

export const MyOSTimelineSchema = withTypeBlueId(blueIds['MyOS Timeline'])(
  TimelineSchema.extend({
    accountId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSTimeline = z.infer<typeof MyOSTimelineSchema>;
