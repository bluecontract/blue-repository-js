import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { TimelineEntrySchema } from './TimelineEntry';

export const ContractUpdateActionSchema = withTypeBlueId(
  blueIds['Contract Update Action']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    contractInstancePrev: z.string().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
    contractInstance: blueNodeField().optional(),
    emittedEvents: z.array(z.unknown()).optional(),
    epoch: z.number().optional(),
    initiateContractProcessingEntry: TimelineEntrySchema.optional(),
  })
);

export type ContractUpdateAction = z.infer<typeof ContractUpdateActionSchema>;
