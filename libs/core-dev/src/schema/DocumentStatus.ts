import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentStatusSchema = withTypeBlueId(blueIds['Document Status'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    mode: z.string().optional(),
  })
);

export type DocumentStatus = z.infer<typeof DocumentStatusSchema>;
