import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { JsonPatchEntrySchema } from '../../core/schemas/JsonPatchEntry';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const UpdateDocumentSchema = withTypeBlueId(
  blueIds['Coordination/Update Document']
)(
  SequentialWorkflowStepSchema.extend({
    changeset: z.array(z.lazy(() => JsonPatchEntrySchema)).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
