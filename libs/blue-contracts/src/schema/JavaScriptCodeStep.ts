import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const JavaScriptCodeStepSchema = withTypeBlueId(
  blueIds.JavaScriptCodeStep
)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    code: z.string().optional(),
  })
);

export type JavaScriptCodeStep = z.infer<typeof JavaScriptCodeStepSchema>;
