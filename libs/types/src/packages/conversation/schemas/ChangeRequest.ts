import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { JsonPatchEntrySchema } from '../../core/schemas/JsonPatchEntry';
import { DocumentSectionChangesSchema } from './DocumentSectionChanges';

export const ChangeRequestSchema = withTypeBlueId(
  blueIds['Conversation/Change Request']
)(
  z.object({
    changeDescription: z.string().optional(),
    changeset: z.array(JsonPatchEntrySchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    sectionChanges: DocumentSectionChangesSchema.optional(),
  })
);

export type ChangeRequest = z.infer<typeof ChangeRequestSchema>;
