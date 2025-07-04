import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { WorkflowStepSchema } from './WorkflowStep';
import { JsonPatchEntrySchema } from './JsonPatchEntry';

export const UpdateStepSchema = withTypeBlueId(blueIds['Update Step'])(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    changeset: z.array(JsonPatchEntrySchema).optional(),
  })
);

export type UpdateStep = z.infer<typeof UpdateStepSchema>;
