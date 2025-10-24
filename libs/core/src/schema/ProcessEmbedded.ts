import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';
import { ListSchema } from './List';

export const ProcessEmbeddedSchema = withTypeBlueId(
  blueIds['Process Embedded']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    paths: ListSchema.optional(),
  })
);

export type ProcessEmbedded = z.infer<typeof ProcessEmbeddedSchema>;
