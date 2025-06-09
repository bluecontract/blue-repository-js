import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const InitializeLocalContractStepSchema = withTypeBlueId(
  blueIds['Initialize Local Contract Step']
)(
  WorkflowStepSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    contract: blueNodeField().optional(),
  })
);

export type InitializeLocalContractStep = z.infer<
  typeof InitializeLocalContractStepSchema
>;
