import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const ComputeDefinitionSchema = withTypeBlueId(
  blueIds['Coordination/Compute Definition']
)(
  MarkerSchema.extend({
    constants: z.record(z.string(), blueNodeField()).optional(),
    description: z.string().optional(),
    functions: z.record(z.string(), blueNodeField()).optional(),
    name: z.string().optional(),
  })
);

export type ComputeDefinition = z.infer<typeof ComputeDefinitionSchema>;
