import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { WorkflowStepSchema } from './WorkflowStep';

export const WorkflowSchema = withTypeBlueId(blueIds.Workflow)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    steps: z.array(WorkflowStepSchema).optional(),
    trigger: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type Workflow = z.infer<typeof WorkflowSchema>;
