import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const LifecycleEventSchema = withTypeBlueId(blueIds['Conversation/Lifecycle Event'])(
  EventSchema.extend({})
);

export type LifecycleEvent = z.infer<typeof LifecycleEventSchema>;
