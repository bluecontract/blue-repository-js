import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ProcessingTerminatedMarkerSchema = withTypeBlueId(
  blueIds['Processing Terminated Marker']
)(
  MarkerSchema.extend({
    cause: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type ProcessingTerminatedMarker = z.infer<
  typeof ProcessingTerminatedMarkerSchema
>;
