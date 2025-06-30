import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const JavaScriptCodeSchema = withTypeBlueId(blueIds['JavaScript Code'])(
  SequentialWorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    code: z.string().optional(),
  })
);

export type JavaScriptCode = z.infer<typeof JavaScriptCodeSchema>;
