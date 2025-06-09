import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ContractInstanceSchema = withTypeBlueId(
  blueIds['Contract Instance']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    workflowInstances: blueNodeField().optional(),
    startedLocalContractCount: z.number().optional(),
    localContractInstances: blueNodeField().optional(),
    contract: blueNodeField().optional(),
    id: z.number().optional(),
    startedWorkflowCount: z.number().optional(),
  })
);

export type ContractInstance = z.infer<typeof ContractInstanceSchema>;
