import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const SequentialWorkflowStepSchema: any = withTypeBlueId(
  blueIds['Coordination/Sequential Workflow Step']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type SequentialWorkflowStep = z.infer<
  typeof SequentialWorkflowStepSchema
>;
