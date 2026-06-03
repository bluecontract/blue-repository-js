import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { TimelineSchema } from './Timeline';

const zod = z as any;

export const TimelineEntrySchema: any = withTypeBlueId(
  blueIds['Coordination/Timeline Entry']
)(
  zod.object({
    actor: zod.lazy(() => ActorSchema).optional(),
    description: zod.string().optional(),
    message: blueNodeField().optional(),
    name: zod.string().optional(),
    prevEntry: blueNodeField().optional(),
    source: blueNodeField().optional(),
    timeline: zod.lazy(() => TimelineSchema).optional(),
    timestamp: zod.number().optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
