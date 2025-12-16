import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { TimelineSchema } from './Timeline';

export const TimelineEntrySchema = withTypeBlueId(blueIds['Conversation/Timeline Entry'])(
  z.object({
    "timeline": TimelineSchema.optional(),
    "prevEntry": blueNodeField().optional(),
    "message": blueNodeField().optional(),
    "timestamp": z.number().int().optional(),
    "actor": ActorSchema.optional()
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
