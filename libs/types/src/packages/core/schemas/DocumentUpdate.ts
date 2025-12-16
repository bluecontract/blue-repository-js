import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

export const DocumentUpdateSchema = withTypeBlueId(blueIds['Core/Document Update'])(
  z.object({
    "op": z.string().optional(),
    "path": z.string().optional(),
    "before": blueNodeField().optional(),
    "after": blueNodeField().optional()
  })
);

export type DocumentUpdate = z.infer<typeof DocumentUpdateSchema>;
