import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';
import { TextSchema } from './Text';

export const ProcessingInitializedMarkerSchema = withTypeBlueId(
  blueIds['Processing Initialized Marker']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    documentId: TextSchema.optional(),
    name: z.string().optional(),
  })
);

export type ProcessingInitializedMarker = z.infer<
  typeof ProcessingInitializedMarkerSchema
>;
