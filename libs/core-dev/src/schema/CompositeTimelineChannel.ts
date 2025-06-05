import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ChannelSchema } from './Channel';

export const CompositeTimelineChannelSchema = withTypeBlueId(
  blueIds['Composite Timeline Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    channels: z.array(z.string()).optional(),
  })
);

export type CompositeTimelineChannel = z.infer<
  typeof CompositeTimelineChannelSchema
>;
