import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { TimelineEntrySchema } from '@blue-repository/blue-contracts';

export const SimulatorTimelineEntrySchema = withTypeBlueId(
  blueIds.SimulatorTimelineEntry
)(
  TimelineEntrySchema.extend({
    name: z.string().optional(),
    tickSequence: z.number().optional(),
  })
);

export type SimulatorTimelineEntry = z.infer<
  typeof SimulatorTimelineEntrySchema
>;
