import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

const zod = z as any;

export const DocumentLinkSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Link']
)(
  LinkSchema.extend({
    description: zod.string().optional(),
    documentId: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type DocumentLink = z.infer<typeof DocumentLinkSchema>;
