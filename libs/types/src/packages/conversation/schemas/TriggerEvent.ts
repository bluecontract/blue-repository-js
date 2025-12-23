import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const TriggerEventSchema = withTypeBlueId(
  blueIds['Conversation/Trigger Event']
)(
  SequentialWorkflowStepSchema.extend({
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
