import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

const zod = z as any;

export const LifecycleEventSchema: any = withTypeBlueId(
  blueIds['Coordination/Lifecycle Event']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type LifecycleEvent = z.infer<typeof LifecycleEventSchema>;
