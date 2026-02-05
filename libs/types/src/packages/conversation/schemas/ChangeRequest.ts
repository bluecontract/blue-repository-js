import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { JsonPatchEntrySchema } from '../../core/schemas/JsonPatchEntry';
import { DocumentSectionChangesSchema } from './DocumentSectionChanges';

export const ChangeRequestSchema = withTypeBlueId(
  blueIds['Conversation/Change Request']
)(
  z.object({
    changeset: z.array(JsonPatchEntrySchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    sectionChanges: DocumentSectionChangesSchema.optional(),
    summary: z.string().optional(),
  })
);

export type ChangeRequest = z.infer<typeof ChangeRequestSchema>;
