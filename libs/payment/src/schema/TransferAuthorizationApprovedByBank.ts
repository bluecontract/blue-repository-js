import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MoneySchema } from './Money';

export const TransferAuthorizationApprovedByBankSchema = withTypeBlueId(
  blueIds['Transfer Authorization Approved by Bank']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    transferValue: MoneySchema.optional(),
  })
);

export type TransferAuthorizationApprovedByBank = z.infer<
  typeof TransferAuthorizationApprovedByBankSchema
>;
