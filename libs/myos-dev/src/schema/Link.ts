import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const LinkSchema = withTypeBlueId(blueIds['Link'])(
  z.object({
    anchor: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Link = z.infer<typeof LinkSchema>;
