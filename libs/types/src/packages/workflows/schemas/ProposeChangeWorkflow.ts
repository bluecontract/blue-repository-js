import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { ChangeRequestSchema } from './ChangeRequest';

const zod = z as any;

export const ProposeChangeWorkflowSchema: any = withTypeBlueId(
  blueIds['Workflows/Propose Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    postfix: zod.string().optional(),
    request: zod.lazy(() => ChangeRequestSchema).optional(),
    steps: blueNodeField().optional(),
  })
);

export type ProposeChangeWorkflow = z.infer<typeof ProposeChangeWorkflowSchema>;
