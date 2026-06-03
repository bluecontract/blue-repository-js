import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const ComputeDefinitionSchema: any = withTypeBlueId(
  blueIds['Coordination/Compute Definition']
)(
  zod.object({
    constants: zod.record(zod.string(), blueNodeField()).optional(),
    description: zod.string().optional(),
    functions: zod.record(zod.string(), blueNodeField()).optional(),
    name: zod.string().optional(),
  })
);

export type ComputeDefinition = z.infer<typeof ComputeDefinitionSchema>;
