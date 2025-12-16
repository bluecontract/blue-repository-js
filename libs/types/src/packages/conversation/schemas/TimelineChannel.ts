import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';

export const TimelineChannelSchema = withTypeBlueId(blueIds['Conversation/Timeline Channel'])(
  ChannelSchema.extend({
    "timelineId": z.string().optional()
  })
);

export type TimelineChannel = z.infer<typeof TimelineChannelSchema>;
