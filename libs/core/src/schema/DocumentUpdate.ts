import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { TextSchema } from './Text';

export const DocumentUpdateSchema = withTypeBlueId(blueIds['Document Update'])(
  z.object({
    after: blueNodeField().optional(),
    before: blueNodeField().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    op: TextSchema.optional(),
    path: TextSchema.optional(),
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;
