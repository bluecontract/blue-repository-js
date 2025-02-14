import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const JsonPatchEntrySchema = withTypeBlueId(blueIds.JsonPatchEntry)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    val: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    op: z.string().optional(),
    path: z.string().optional(),
  })
);

export type JsonPatchEntry = z.infer<typeof JsonPatchEntrySchema>;
