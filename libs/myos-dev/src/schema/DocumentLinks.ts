import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const DocumentLinksSchema = withTypeBlueId(blueIds['Document Links'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type DocumentLinks = z.infer<typeof DocumentLinksSchema>;
