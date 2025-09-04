import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineSchema } from '@blue-repository/core-dev';

export const MyOSTimelineSchema = withTypeBlueId(blueIds['MyOS Timeline'])(
  TimelineSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    accountId: z.string().optional(),
  })
);

export type MyOSTimeline = z.infer<typeof MyOSTimelineSchema>;
