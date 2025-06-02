import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const WorkflowStepSchema = withTypeBlueId(blueIds.WorkflowStep)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkflowStep = z.infer<typeof WorkflowStepSchema>;
