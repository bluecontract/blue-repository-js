import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const SequentialWorkflowStepSchema = withTypeBlueId(
  blueIds.SequentialWorkflowStep
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type SequentialWorkflowStep = z.infer<
  typeof SequentialWorkflowStepSchema
>;
