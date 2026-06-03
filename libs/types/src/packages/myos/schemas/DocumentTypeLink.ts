import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { LinkSchema } from './Link';

const zod = z as any;

export const DocumentTypeLinkSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Type Link']
)(
  LinkSchema.extend({
    description: zod.string().optional(),
    documentType: blueNodeField().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentTypeLink = z.infer<typeof DocumentTypeLinkSchema>;
