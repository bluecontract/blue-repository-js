import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const ProcessEmbeddedSchema = withTypeBlueId(
  blueIds['Process Embedded']
)(
  z.object({
    name: z.string().optional(),
    paths: z.array(z.string()).optional(),
  })
);

export type ProcessEmbedded = z.infer<typeof ProcessEmbeddedSchema>;
