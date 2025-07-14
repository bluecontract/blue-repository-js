import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const LifecycleEventSchema = withTypeBlueId(blueIds['Lifecycle Event'])(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type LifecycleEvent = z.infer<typeof LifecycleEventSchema>;
