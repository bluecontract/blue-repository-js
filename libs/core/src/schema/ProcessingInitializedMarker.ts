import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ProcessingInitializedMarkerSchema = withTypeBlueId(
  blueIds['Processing Initialized Marker']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    documentId: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ProcessingInitializedMarker = z.infer<
  typeof ProcessingInitializedMarkerSchema
>;
