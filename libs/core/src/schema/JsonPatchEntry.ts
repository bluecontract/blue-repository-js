import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const JsonPatchEntrySchema = withTypeBlueId(blueIds['Json Patch Entry'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    op: z.string().optional(),
    path: z.string().optional(),
    val: blueNodeField().optional(),
  })
);

export type JsonPatchEntry = z.infer<typeof JsonPatchEntrySchema>;
