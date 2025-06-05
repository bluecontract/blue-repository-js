import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ContractSchema } from './Contract';

export const InitiateContractActionSchema = withTypeBlueId(
  blueIds['Initiate Contract Action']
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
