import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const InternalEventsChannelSchema = withTypeBlueId(
  blueIds['Internal Events Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type InternalEventsChannel = z.infer<typeof InternalEventsChannelSchema>;
