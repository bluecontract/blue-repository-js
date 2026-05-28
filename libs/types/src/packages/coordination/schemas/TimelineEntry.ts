import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { TimelineSchema } from './Timeline';

export const TimelineEntrySchema = withTypeBlueId(
  blueIds['Coordination/Timeline Entry']
)(
  z.object({
    actor: z.lazy(() => ActorSchema).optional(),
    description: z.string().optional(),
    message: blueNodeField().optional(),
    name: z.string().optional(),
    prevEntry: blueNodeField().optional(),
    source: blueNodeField().optional(),
    timeline: z.lazy(() => TimelineSchema).optional(),
    timestamp: z.number().optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
