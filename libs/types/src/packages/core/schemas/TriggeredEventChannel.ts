import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const TriggeredEventChannelSchema = withTypeBlueId(
  blueIds['Core/Triggered Event Channel']
)(
  ChannelSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type TriggeredEventChannel = z.infer<typeof TriggeredEventChannelSchema>;
