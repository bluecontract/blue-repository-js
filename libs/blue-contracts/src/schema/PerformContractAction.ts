import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { TimelineEntrySchema } from './TimelineEntry';

export const PerformContractActionSchema = withTypeBlueId(
  blueIds.PerformContractAction
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    workflowInstance: z.number().optional(),
    action: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
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
