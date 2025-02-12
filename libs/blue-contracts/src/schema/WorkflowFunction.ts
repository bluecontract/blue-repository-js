import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const WorkflowFunctionSchema = withTypeBlueId(blueIds.WorkflowFunction)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkflowFunction = z.infer<typeof WorkflowFunctionSchema>;
