import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const TimelineChannelSchema = withTypeBlueId(
  blueIds['Timeline Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    timelineId: z.string().optional(),
  })
);

export type TimelineChannel = z.infer<typeof TimelineChannelSchema>;
