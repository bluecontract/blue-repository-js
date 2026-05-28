import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

export const ComputeSchema = withTypeBlueId(blueIds['Coordination/Compute'])(
  SequentialWorkflowStepSchema.extend({
    constants: z.record(z.string(), blueNodeField()).optional(),
    definition: blueNodeField().optional(),
    description: z.string().optional(),
    do: z.array(blueNodeField()).optional(),
    emitEvents: z.boolean().optional(),
    entry: z.string().optional(),
    expr: blueNodeField().optional(),
    functions: z.record(z.string(), blueNodeField()).optional(),
    gasLimit: z.number().optional(),
    name: z.string().optional(),
    returnResult: z.boolean().optional(),
  })
);

export type Compute = z.infer<typeof ComputeSchema>;
