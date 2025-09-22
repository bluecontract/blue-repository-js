import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const LinkSchema = withTypeBlueId(blueIds['Link'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    anchor: z.string().optional(),
  })
);

export type Link = z.infer<typeof LinkSchema>;
