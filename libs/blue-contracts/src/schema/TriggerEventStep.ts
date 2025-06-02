import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const TriggerEventStepSchema = withTypeBlueId(blueIds.TriggerEventStep)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type TriggerEventStep = z.infer<typeof TriggerEventStepSchema>;
