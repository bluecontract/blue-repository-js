import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const WorkflowInstanceSchema = withTypeBlueId(blueIds.WorkflowInstance)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    stepResults: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    finished: z.boolean().optional(),
    id: z.number().optional(),
    workflow: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    currentStepName: z.string().optional(),
  })
);

export type WorkflowInstance = z.infer<typeof WorkflowInstanceSchema>;
