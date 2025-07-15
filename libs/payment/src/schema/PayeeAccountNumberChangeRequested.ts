import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const PayeeAccountNumberChangeRequestedSchema = withTypeBlueId(
  blueIds['Payee Account Number Change Requested']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    payeeAccountNumber: z.string().optional(),
  })
);

export type PayeeAccountNumberChangeRequested = z.infer<
  typeof PayeeAccountNumberChangeRequestedSchema
>;
