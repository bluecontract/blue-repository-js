import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const WorkflowInstanceStartedEventSchema = withTypeBlueId(
  blueIds['Workflow Instance Started Event']
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
