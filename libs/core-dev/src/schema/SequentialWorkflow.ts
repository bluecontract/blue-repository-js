import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const SequentialWorkflowSchema = withTypeBlueId(
  blueIds['Sequential Workflow']
)(
  z.object({
    channel: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
    steps: z.array(SequentialWorkflowStepSchema).optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
