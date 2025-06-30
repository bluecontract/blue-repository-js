import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
import { JsonPatchEntrySchema } from './JsonPatchEntry';

export const UpdateDocumentSchema = withTypeBlueId(blueIds['Update Document'])(
  SequentialWorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    changeset: z.array(JsonPatchEntrySchema).optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
