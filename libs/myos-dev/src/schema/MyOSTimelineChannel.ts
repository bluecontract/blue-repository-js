import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { TimelineChannelSchema } from '@blue-repository/core-dev';

export const MyOSTimelineChannelSchema = withTypeBlueId(
  blueIds.MyOSTimelineChannel
)(
  TimelineChannelSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    account: z.string().optional(),
    email: z.string().optional(),
  })
);

export type MyOSTimelineChannel = z.infer<typeof MyOSTimelineChannelSchema>;
