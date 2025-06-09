import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const ExpectEventStepSchema = withTypeBlueId(
  blueIds['Expect Event Step']
)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type ExpectEventStep = z.infer<typeof ExpectEventStepSchema>;
