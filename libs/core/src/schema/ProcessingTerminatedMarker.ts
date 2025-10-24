import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';
import { TextSchema } from './Text';

export const ProcessingTerminatedMarkerSchema = withTypeBlueId(
  blueIds['Processing Terminated Marker']
)(
  MarkerSchema.extend({
    cause: TextSchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: TextSchema.optional(),
  })
);

export type ProcessingTerminatedMarker = z.infer<
  typeof ProcessingTerminatedMarkerSchema
>;
