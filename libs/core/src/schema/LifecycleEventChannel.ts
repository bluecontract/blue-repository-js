import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const LifecycleEventChannelSchema = withTypeBlueId(
  blueIds['Lifecycle Event Channel']
)(
  ChannelSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type LifecycleEventChannel = z.infer<typeof LifecycleEventChannelSchema>;
