import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';

export const AcceptChangeWorkflowSchema = withTypeBlueId(
  blueIds['Workflows/Accept Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    postfix: z.string().optional(),
    steps: blueNodeField().optional(),
  })
);

export type AcceptChangeWorkflow = z.infer<typeof AcceptChangeWorkflowSchema>;
