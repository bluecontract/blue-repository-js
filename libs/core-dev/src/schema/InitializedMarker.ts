import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const InitializedMarkerSchema = withTypeBlueId(
  blueIds['Initialized Marker']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type InitializedMarker = z.infer<typeof InitializedMarkerSchema>;
