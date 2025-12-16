import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ProcessingInitializedMarkerSchema = withTypeBlueId(blueIds['Core/Processing Initialized Marker'])(
  MarkerSchema.extend({
    "documentId": z.string().optional()
  })
);

export type ProcessingInitializedMarker = z.infer<typeof ProcessingInitializedMarkerSchema>;
