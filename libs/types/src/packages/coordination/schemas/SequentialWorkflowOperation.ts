import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from './Operation';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const SequentialWorkflowOperationSchema: any = withTypeBlueId(
  blueIds['Coordination/Sequential Workflow Operation']
)(
  OperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    steps: zod.array(zod.lazy(() => SequentialWorkflowStepSchema)).optional(),
  })
);

export type SequentialWorkflowOperation = z.infer<
  typeof SequentialWorkflowOperationSchema
>;
