import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { JsonPatchEntrySchema } from './JsonPatchEntry';

export const UpdateDocumentSchema = withTypeBlueId(blueIds['Update Document'])(
  z.object({
    name: z.string().optional(),
    changeset: z.array(JsonPatchEntrySchema).optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
