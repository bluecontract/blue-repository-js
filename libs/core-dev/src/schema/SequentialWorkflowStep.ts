import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SequentialWorkflowStepSchema = withTypeBlueId(
  blueIds['Sequential Workflow Step']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type SequentialWorkflowStep = z.infer<
  typeof SequentialWorkflowStepSchema
>;
