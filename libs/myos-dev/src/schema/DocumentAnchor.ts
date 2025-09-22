import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const DocumentAnchorSchema = withTypeBlueId(blueIds['Document Anchor'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    template: blueNodeField().optional(),
  })
);

export type DocumentAnchor = z.infer<typeof DocumentAnchorSchema>;
