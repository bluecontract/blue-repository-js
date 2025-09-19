import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';
import { LifecycleEventSchema } from './LifecycleEvent';

export const LifecycleEventChannelSchema = withTypeBlueId(
  blueIds['Lifecycle Event Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    event: LifecycleEventSchema.optional(),
  })
);

export type LifecycleEventChannel = z.infer<typeof LifecycleEventChannelSchema>;
