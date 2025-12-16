import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from './Marker';

export const ProcessEmbeddedSchema = withTypeBlueId(blueIds['Core/Process Embedded'])(
  MarkerSchema.extend({
    "paths": z.array(z.string()).optional()
  })
);

export type ProcessEmbedded = z.infer<typeof ProcessEmbeddedSchema>;
