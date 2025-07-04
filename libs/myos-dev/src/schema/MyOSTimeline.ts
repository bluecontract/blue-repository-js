import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineSchema } from '@blue-repository/core-dev';

export const MyOSTimelineSchema = withTypeBlueId(blueIds['MyOS Timeline'])(
  TimelineSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    accountId: z.number().optional(),
  })
);

export type MyOSTimeline = z.infer<typeof MyOSTimelineSchema>;
