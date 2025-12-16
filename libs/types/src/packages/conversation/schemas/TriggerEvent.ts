import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const TriggerEventSchema = withTypeBlueId(blueIds['Conversation/Trigger Event'])(
  SequentialWorkflowStepSchema.extend({
    "event": blueNodeField().optional()
  })
);

export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
