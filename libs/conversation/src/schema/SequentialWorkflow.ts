import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { HandlerSchema } from '@blue-repository/core';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const SequentialWorkflowSchema = withTypeBlueId(
  blueIds['Sequential Workflow']
)(
  HandlerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    steps: z.array(SequentialWorkflowStepSchema).optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
