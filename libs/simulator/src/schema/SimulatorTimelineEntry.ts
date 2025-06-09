import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineEntrySchema } from '@blue-repository/blue-contracts';

export const SimulatorTimelineEntrySchema = withTypeBlueId(
  blueIds['Simulator Timeline Entry']
)(
  TimelineEntrySchema.extend({
    name: z.string().optional(),
    tickSequence: z.number().optional(),
  })
);

export type SimulatorTimelineEntry = z.infer<
  typeof SimulatorTimelineEntrySchema
>;
