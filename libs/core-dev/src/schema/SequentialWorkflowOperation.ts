import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowSchema } from './SequentialWorkflow';

export const SequentialWorkflowOperationSchema = withTypeBlueId(
  blueIds['Sequential Workflow Operation']
)(
  SequentialWorkflowSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    operation: z.string().optional(),
  })
);

export type SequentialWorkflowOperation = z.infer<
  typeof SequentialWorkflowOperationSchema
>;
