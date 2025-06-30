import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const StateChangeSchema = withTypeBlueId(blueIds['State Change'])(
  SequentialWorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    message: z.string().optional(),
  })
);

export type StateChange = z.infer<typeof StateChangeSchema>;
