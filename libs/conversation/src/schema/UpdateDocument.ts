import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';
import { JsonPatchEntrySchema } from '@blue-repository/core';

export const UpdateDocumentSchema = withTypeBlueId(blueIds['Update Document'])(
  SequentialWorkflowStepSchema.extend({
    changeset: z.array(JsonPatchEntrySchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
