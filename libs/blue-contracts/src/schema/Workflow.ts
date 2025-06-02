import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const WorkflowSchema = withTypeBlueId(blueIds.Workflow)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    steps: z.array(WorkflowStepSchema).optional(),
    trigger: blueNodeField().optional(),
  })
);

export type Workflow = z.infer<typeof WorkflowSchema>;
