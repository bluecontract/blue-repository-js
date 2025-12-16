import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const DocumentLinkSchema = withTypeBlueId(blueIds['MyOS/Document Link'])(
  LinkSchema.extend({
    "documentId": z.string().optional()
  })
);

export type DocumentLink = z.infer<typeof DocumentLinkSchema>;
