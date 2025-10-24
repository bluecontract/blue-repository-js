import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentStatusSchema = withTypeBlueId(blueIds['Document Status'])(
  z.object({
    description: z.string().optional(),
    mode: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type DocumentStatus = z.infer<typeof DocumentStatusSchema>;
