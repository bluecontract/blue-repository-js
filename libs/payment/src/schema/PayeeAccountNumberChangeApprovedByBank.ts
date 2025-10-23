import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const PayeeAccountNumberChangeApprovedByBankSchema = withTypeBlueId(
  blueIds['Payee Account Number Change Approved by Bank']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    payeeAccountNumber: z.string().optional(),
  })
);

export type PayeeAccountNumberChangeApprovedByBank = z.infer<
  typeof PayeeAccountNumberChangeApprovedByBankSchema
>;
