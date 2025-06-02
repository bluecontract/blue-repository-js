import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { WorkflowStepSchema } from './WorkflowStep';

export const InitializeLocalContractStepSchema = withTypeBlueId(
  blueIds.InitializeLocalContractStep
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
