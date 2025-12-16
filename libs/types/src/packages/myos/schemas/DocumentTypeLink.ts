import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const DocumentTypeLinkSchema = withTypeBlueId(blueIds['MyOS/Document Type Link'])(
  LinkSchema.extend({
    "documentType": blueNodeField().optional()
  })
);

export type DocumentTypeLink = z.infer<typeof DocumentTypeLinkSchema>;
