import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';

export const RejectChangeWorkflowSchema = withTypeBlueId(
  blueIds['Conversation/Reject Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    postfix: z.string().optional(),
    steps: blueNodeField().optional(),
  })
);

export type RejectChangeWorkflow = z.infer<typeof RejectChangeWorkflowSchema>;
