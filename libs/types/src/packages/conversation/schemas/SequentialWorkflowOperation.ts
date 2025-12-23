import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowSchema } from './SequentialWorkflow';

export const SequentialWorkflowOperationSchema = withTypeBlueId(
  blueIds['Conversation/Sequential Workflow Operation']
)(
  SequentialWorkflowSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    operation: z.string().optional(),
  })
);

export type SequentialWorkflowOperation = z.infer<
  typeof SequentialWorkflowOperationSchema
>;
