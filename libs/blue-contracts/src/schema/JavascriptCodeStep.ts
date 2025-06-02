import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const JavascriptCodeStepSchema = withTypeBlueId(
  blueIds.JavascriptCodeStep
)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    code: z.string().optional(),
  })
);

export type JavascriptCodeStep = z.infer<typeof JavascriptCodeStepSchema>;
