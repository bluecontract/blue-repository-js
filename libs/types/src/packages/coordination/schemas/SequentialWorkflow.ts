import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { HandlerSchema } from '../../core/schemas/Handler';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const SequentialWorkflowSchema = withTypeBlueId(
  blueIds['Coordination/Sequential Workflow']
)(
  HandlerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    steps: z.array(z.lazy(() => SequentialWorkflowStepSchema)).optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
