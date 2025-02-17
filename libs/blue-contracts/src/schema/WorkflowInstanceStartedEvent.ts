import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const WorkflowInstanceStartedEventSchema = withTypeBlueId(
  blueIds.WorkflowInstanceStartedEvent
)(
  z.object({
    name: z.string().optional(),
    initiateContractEntry: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    initiateContractProcessingEntry: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    currentStepName: z.string().optional(),
    contractInstanceId: z.number().optional(),
    workflowInstanceId: z.number().optional(),
  })
);

export type WorkflowInstanceStartedEvent = z.infer<
  typeof WorkflowInstanceStartedEventSchema
>;
