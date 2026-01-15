import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChangeRequestSchema } from './ChangeRequest';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';

export const ProposeChangeWorkflowSchema = withTypeBlueId(
  blueIds['Conversation/Propose Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    postfix: z.string().optional(),
    request: ChangeRequestSchema.optional(),
    steps: blueNodeField().optional(),
  })
);

export type ProposeChangeWorkflow = z.infer<typeof ProposeChangeWorkflowSchema>;
