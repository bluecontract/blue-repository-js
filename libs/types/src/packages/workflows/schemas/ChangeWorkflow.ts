import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { ChangeRequestSchema } from './ChangeRequest';

const zod = z as any;

export const ChangeWorkflowSchema: any = withTypeBlueId(
  blueIds['Workflows/Change Workflow']
)(
  SequentialWorkflowOperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: zod.lazy(() => ChangeRequestSchema).optional(),
    steps: blueNodeField().optional(),
  })
);

export type ChangeWorkflow = z.infer<typeof ChangeWorkflowSchema>;
