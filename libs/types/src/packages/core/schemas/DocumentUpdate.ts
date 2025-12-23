import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

export const DocumentUpdateSchema = withTypeBlueId(
  blueIds['Core/Document Update']
)(
  z.object({
    after: blueNodeField().optional(),
    before: blueNodeField().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    op: z.string().optional(),
    path: z.string().optional(),
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;
