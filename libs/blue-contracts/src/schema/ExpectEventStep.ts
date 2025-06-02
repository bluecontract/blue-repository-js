import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const ExpectEventStepSchema = withTypeBlueId(blueIds.ExpectEventStep)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type ExpectEventStep = z.infer<typeof ExpectEventStepSchema>;
