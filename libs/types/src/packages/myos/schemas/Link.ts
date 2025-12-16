import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const LinkSchema = withTypeBlueId(blueIds['MyOS/Link'])(
  z.object({
    "anchor": z.string().optional()
  })
);

export type Link = z.infer<typeof LinkSchema>;
