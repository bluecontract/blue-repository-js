import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const SequentialWorkflowSchema = withTypeBlueId(
  blueIds.SequentialWorkflow
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    channel: z.string().optional(),
    steps: z.array(SequentialWorkflowStepSchema).optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
