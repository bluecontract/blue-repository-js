import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ContractProcessingEventSchema = withTypeBlueId(
  blueIds.ContractProcessingEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    initiateContractEntry: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    workflowStepName: z.string().optional(),
    initiateContractProcessingEntry: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    contractInstanceId: z.number().optional(),
    event: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    workflowInstanceId: z.number().optional(),
  })
);

export type ContractProcessingEvent = z.infer<
  typeof ContractProcessingEventSchema
>;
