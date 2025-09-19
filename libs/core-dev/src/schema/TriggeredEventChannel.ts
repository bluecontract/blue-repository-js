import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const TriggeredEventChannelSchema = withTypeBlueId(
  blueIds['Triggered Event Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type TriggeredEventChannel = z.infer<typeof TriggeredEventChannelSchema>;
