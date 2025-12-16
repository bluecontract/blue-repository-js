import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { HandlerSchema } from '../../core/schemas/Handler';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const SequentialWorkflowSchema = withTypeBlueId(blueIds['Conversation/Sequential Workflow'])(
  HandlerSchema.extend({
    "steps": z.array(SequentialWorkflowStepSchema).optional()
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
