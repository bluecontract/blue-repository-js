import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { TimelineEntrySchema } from './TimelineEntry';

export const PerformContractActionSchema = withTypeBlueId(
  blueIds['Perform Contract Action']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    workflowInstance: z.number().optional(),
    action: blueNodeField().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
    workflowName: z
      .object({
        description: z.string().optional(),
        type: z.string().optional(),
      })
      .optional(),
    contractInstance: z.number().optional(),
  })
);

export type PerformContractAction = z.infer<typeof PerformContractActionSchema>;
