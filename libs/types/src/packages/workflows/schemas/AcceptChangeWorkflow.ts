import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';

const zod = z as any;

export const AcceptChangeWorkflowSchema: any = withTypeBlueId(
  blueIds['Workflows/Accept Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    postfix: zod.string().optional(),
    steps: blueNodeField().optional(),
  })
);

export type AcceptChangeWorkflow = z.infer<typeof AcceptChangeWorkflowSchema>;
