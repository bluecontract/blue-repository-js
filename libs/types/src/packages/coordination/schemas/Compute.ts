import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const ComputeSchema: any = withTypeBlueId(
  blueIds['Coordination/Compute']
)(
  SequentialWorkflowStepSchema.extend({
    constants: zod.record(zod.string(), blueNodeField()).optional(),
    definition: blueNodeField().optional(),
    description: zod.string().optional(),
    do: zod.array(blueNodeField()).optional(),
    emitEvents: zod.boolean().optional(),
    entry: zod.string().optional(),
    expr: blueNodeField().optional(),
    functions: zod.record(zod.string(), blueNodeField()).optional(),
    gasLimit: zod.number().optional(),
    name: zod.string().optional(),
    returnResult: zod.boolean().optional(),
  })
);

export type Compute = z.infer<typeof ComputeSchema>;
