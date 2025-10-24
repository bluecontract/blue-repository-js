import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TextSchema = withTypeBlueId(blueIds['Text'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Text = z.infer<typeof TextSchema>;
