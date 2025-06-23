import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema } from './Channel';

export const LifecycleEventChannelSchema = withTypeBlueId(
  blueIds['Lifecycle Event Channel']
)(
  ChannelSchema.extend({
    name: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type LifecycleEventChannel = z.infer<typeof LifecycleEventChannelSchema>;
