import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TransferCancellationApprovedByBankSchema = withTypeBlueId(
  blueIds['Transfer Cancellation Approved by Bank']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type TransferCancellationApprovedByBank = z.infer<
  typeof TransferCancellationApprovedByBankSchema
>;
