import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ProcessEmbeddedSchema = withTypeBlueId(
  blueIds['Process Embedded']
)(
  z.object({
    name: z.string().optional(),
    paths: z.unknown().optional(),
  })
);

export type ProcessEmbedded = z.infer<typeof ProcessEmbeddedSchema>;
