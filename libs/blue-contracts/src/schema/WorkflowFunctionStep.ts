import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const WorkflowFunctionStepSchema = withTypeBlueId(
  blueIds.WorkflowFunctionStep
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkflowFunctionStep = z.infer<typeof WorkflowFunctionStepSchema>;
