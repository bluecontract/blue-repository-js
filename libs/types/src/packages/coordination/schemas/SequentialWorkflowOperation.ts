import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowSchema } from './SequentialWorkflow';

const zod = z as any;

export const SequentialWorkflowOperationSchema: any = withTypeBlueId(
  blueIds['Coordination/Sequential Workflow Operation']
)(
  SequentialWorkflowSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    operation: zod.string().optional(),
  })
);

export type SequentialWorkflowOperation = z.infer<
  typeof SequentialWorkflowOperationSchema
>;
