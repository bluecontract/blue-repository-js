import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChangeRequestSchema } from '../../coordination/schemas/ChangeRequest';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';

export const ProposeChangeWorkflowSchema = withTypeBlueId(
  blueIds['Workflows/Propose Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    postfix: z.string().optional(),
    request: z.lazy(() => ChangeRequestSchema).optional(),
    steps: blueNodeField().optional(),
  })
);

export type ProposeChangeWorkflow = z.infer<typeof ProposeChangeWorkflowSchema>;
