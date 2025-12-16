import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineChannelSchema } from '../../conversation/schemas/TimelineChannel';

export const MyOSTimelineChannelSchema = withTypeBlueId(blueIds['MyOS/MyOS Timeline Channel'])(
  TimelineChannelSchema.extend({
    "accountId": z.string().optional(),
    "email": z.string().optional()
  })
);

export type MyOSTimelineChannel = z.infer<typeof MyOSTimelineChannelSchema>;
