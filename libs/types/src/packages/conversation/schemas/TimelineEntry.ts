import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { TimelineSchema } from './Timeline';

export const TimelineEntrySchema = withTypeBlueId(
  blueIds['Conversation/Timeline Entry']
)(
  z.object({
    actor: ActorSchema.optional(),
    description: z.string().optional(),
    message: blueNodeField().optional(),
    name: z.string().optional(),
    prevEntry: blueNodeField().optional(),
    timeline: TimelineSchema.optional(),
    timestamp: z.number().optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
