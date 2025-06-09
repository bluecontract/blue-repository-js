import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const WorkflowFunctionStepSchema = withTypeBlueId(
  blueIds['Workflow Function Step']
)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkflowFunctionStep = z.infer<typeof WorkflowFunctionStepSchema>;
