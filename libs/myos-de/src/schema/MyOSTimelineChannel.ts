import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineChannelSchema } from '@blue-repository/core-dev';

export const MyOSTimelineChannelSchema = withTypeBlueId(
  blueIds['MyOS Timeline Channel']
)(
  TimelineChannelSchema.extend({
    accountId: z.string().optional(),
    description: z.string().optional(),
    email: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSTimelineChannel = z.infer<typeof MyOSTimelineChannelSchema>;
