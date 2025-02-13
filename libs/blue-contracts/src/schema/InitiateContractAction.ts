import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { ContractSchema } from './Contract';

export const InitiateContractActionSchema = withTypeBlueId(
  blueIds.InitiateContractAction
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    contract: ContractSchema.optional(),
  })
);

export type InitiateContractAction = z.infer<
  typeof InitiateContractActionSchema
>;
