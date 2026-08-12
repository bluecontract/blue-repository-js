import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const TerminateProcessingSchema: any = withTypeBlueId(
  blueIds['Coordination/Terminate Processing']
)(
  SequentialWorkflowStepSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type TerminateProcessing = z.infer<typeof TerminateProcessingSchema>;
