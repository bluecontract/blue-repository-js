import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const UpdateDocumentSchema = withTypeBlueId(blueIds['Update Document'])(
  SequentialWorkflowStepSchema.extend({
    changeset: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
