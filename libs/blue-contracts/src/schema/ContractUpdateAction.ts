import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { TimelineEntrySchema } from './TimelineEntry';

export const ContractUpdateActionSchema = withTypeBlueId(
  blueIds.ContractUpdateAction
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    contractInstancePrev: z.string().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
    contractInstance: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    emittedEvents: z.array(z.unknown()).optional(),
    epoch: z.number().optional(),
    initiateContractProcessingEntry: TimelineEntrySchema.optional(),
  })
);

export type ContractUpdateAction = z.infer<typeof ContractUpdateActionSchema>;
