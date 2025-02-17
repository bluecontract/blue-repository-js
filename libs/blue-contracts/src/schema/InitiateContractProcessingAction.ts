import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { TimelineEntrySchema } from './TimelineEntry';
import { ContractSchema } from './Contract';

export const InitiateContractProcessingActionSchema = withTypeBlueId(
  blueIds.InitiateContractProcessingAction
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
