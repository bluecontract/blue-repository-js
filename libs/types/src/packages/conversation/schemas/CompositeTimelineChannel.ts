import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';

export const CompositeTimelineChannelSchema = withTypeBlueId(blueIds['Conversation/Composite Timeline Channel'])(
  ChannelSchema.extend({
    "channels": z.array(z.string()).optional()
  })
);

export type CompositeTimelineChannel = z.infer<typeof CompositeTimelineChannelSchema>;
