import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const DocumentLinkSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Link']
)(
  zod.object({
    anchor: zod.string().optional(),
    description: zod.string().optional(),
    initialDocument: blueNodeField(),
    name: zod.string().optional(),
  })
);

export type DocumentLink = z.infer<typeof DocumentLinkSchema>;
