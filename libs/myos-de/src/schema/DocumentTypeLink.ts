import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const DocumentTypeLinkSchema = withTypeBlueId(
  blueIds['Document Type Link']
)(
  LinkSchema.extend({
    description: z.string().optional(),
    documentType: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type DocumentTypeLink = z.infer<typeof DocumentTypeLinkSchema>;
