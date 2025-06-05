import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ContractSchema } from './Contract';

export const GenericContractSchema = withTypeBlueId(
  blueIds['Generic Contract']
)(
  ContractSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type GenericContract = z.infer<typeof GenericContractSchema>;
