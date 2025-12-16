import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';

export const TimelineChannelV2Schema = withTypeBlueId(blueIds['Conversation/Timeline Channel V2'])(
  ChannelSchema.extend({
    "timelineId": z.string().optional(),
    "note": z.string().optional(),
    "test": z.array(blueNodeField()).optional()
  })
);

export type TimelineChannelV2 = z.infer<typeof TimelineChannelV2Schema>;
