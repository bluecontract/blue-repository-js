import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const SequentialWorkflowSchema: any = withTypeBlueId(
  blueIds['Coordination/Sequential Workflow']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    steps: zod.array(zod.lazy(() => SequentialWorkflowStepSchema)).optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
