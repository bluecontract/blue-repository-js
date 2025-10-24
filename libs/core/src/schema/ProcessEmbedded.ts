import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ProcessEmbeddedSchema = withTypeBlueId(
  blueIds['Process Embedded']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    paths: z.array(z.string()).optional(),
  })
);

export type ProcessEmbedded = z.infer<typeof ProcessEmbeddedSchema>;
