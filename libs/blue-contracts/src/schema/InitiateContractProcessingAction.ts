import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { TimelineEntrySchema } from './TimelineEntry';
import { ContractSchema } from './Contract';

export const InitiateContractProcessingActionSchema = withTypeBlueId(
  blueIds['Initiate Contract Processing Action']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
    contract: ContractSchema.optional(),
  })
);

export type InitiateContractProcessingAction = z.infer<
  typeof InitiateContractProcessingActionSchema
>;
