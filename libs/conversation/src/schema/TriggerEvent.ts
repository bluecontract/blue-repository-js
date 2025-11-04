import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const TriggerEventSchema = withTypeBlueId(blueIds['Trigger Event'])(
  SequentialWorkflowStepSchema.extend({
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
