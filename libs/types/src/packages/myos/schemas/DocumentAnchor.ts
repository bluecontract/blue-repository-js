import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const DocumentAnchorSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Anchor']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    template: blueNodeField().optional(),
  })
);

export type DocumentAnchor = z.infer<typeof DocumentAnchorSchema>;
