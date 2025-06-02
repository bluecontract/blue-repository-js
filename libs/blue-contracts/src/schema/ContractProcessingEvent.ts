import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const ContractProcessingEventSchema = withTypeBlueId(
  blueIds.ContractProcessingEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    initiateContractEntry: blueNodeField().optional(),
    workflowStepName: z.string().optional(),
    initiateContractProcessingEntry: blueNodeField().optional(),
    contractInstanceId: z.number().optional(),
    event: blueNodeField().optional(),
    workflowInstanceId: z.number().optional(),
  })
);

export type ContractProcessingEvent = z.infer<
  typeof ContractProcessingEventSchema
>;
