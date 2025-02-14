import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const SimulatorTimelineEntrySchema = withTypeBlueId(
  blueIds.SimulatorTimelineEntry
)(
  z.object({
    name: z.string().optional(),
    tickSequence: z.number().optional(),
  })
);

export type SimulatorTimelineEntry = z.infer<
  typeof SimulatorTimelineEntrySchema
>;
