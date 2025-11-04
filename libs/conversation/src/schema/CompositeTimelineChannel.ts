import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from '@blue-repository/core';

export const CompositeTimelineChannelSchema = withTypeBlueId(
  blueIds['Composite Timeline Channel']
)(
  ChannelSchema.extend({
    channels: z.array(z.string()).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CompositeTimelineChannel = z.infer<
  typeof CompositeTimelineChannelSchema
>;
