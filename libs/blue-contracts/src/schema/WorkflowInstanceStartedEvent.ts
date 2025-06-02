import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const WorkflowInstanceStartedEventSchema = withTypeBlueId(
  blueIds.WorkflowInstanceStartedEvent
)(
  z.object({
    name: z.string().optional(),
    initiateContractEntry: blueNodeField().optional(),
    initiateContractProcessingEntry: blueNodeField().optional(),
    currentStepName: z.string().optional(),
    contractInstanceId: z.number().optional(),
    workflowInstanceId: z.number().optional(),
  })
);

export type WorkflowInstanceStartedEvent = z.infer<
  typeof WorkflowInstanceStartedEventSchema
>;
