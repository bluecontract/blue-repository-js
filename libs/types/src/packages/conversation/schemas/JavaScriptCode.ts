import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const JavaScriptCodeSchema = withTypeBlueId(blueIds['Conversation/JavaScript Code'])(
  SequentialWorkflowStepSchema.extend({
    "code": z.string().optional()
  })
);

export type JavaScriptCode = z.infer<typeof JavaScriptCodeSchema>;
