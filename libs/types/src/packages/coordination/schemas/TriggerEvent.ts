import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const TriggerEventSchema: any = withTypeBlueId(
  blueIds['Coordination/Trigger Event']
)(
  SequentialWorkflowStepSchema.extend({
    description: zod.string().optional(),
    event: blueNodeField().optional(),
    name: zod.string().optional(),
  })
);

export type TriggerEvent = z.infer<typeof TriggerEventSchema>;
