import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const LifecycleEventSchema = withTypeBlueId(blueIds['Lifecycle Event'])(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type LifecycleEvent = z.infer<typeof LifecycleEventSchema>;
