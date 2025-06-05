import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const WorkflowFunctionSchema = withTypeBlueId(
  blueIds['Workflow Function']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkflowFunction = z.infer<typeof WorkflowFunctionSchema>;
