import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const DocumentLinkSchema = withTypeBlueId(blueIds['Document Link'])(
  LinkSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    documentId: z.string().optional(),
  })
);

export type DocumentLink = z.infer<typeof DocumentLinkSchema>;
