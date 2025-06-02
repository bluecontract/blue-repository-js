import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const WorkflowInstanceSchema = withTypeBlueId(blueIds.WorkflowInstance)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    stepResults: blueNodeField().optional(),
    finished: z.boolean().optional(),
    id: z.number().optional(),
    workflow: blueNodeField().optional(),
    currentStepName: z.string().optional(),
  })
);

export type WorkflowInstance = z.infer<typeof WorkflowInstanceSchema>;
