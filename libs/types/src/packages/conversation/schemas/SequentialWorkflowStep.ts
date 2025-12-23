import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const SequentialWorkflowStepSchema = withTypeBlueId(
  blueIds['Conversation/Sequential Workflow Step']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type SequentialWorkflowStep = z.infer<
  typeof SequentialWorkflowStepSchema
>;
