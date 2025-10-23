import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TransferCaptureApprovedByBankSchema = withTypeBlueId(
  blueIds['Transfer Capture Approved by Bank']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type TransferCaptureApprovedByBank = z.infer<
  typeof TransferCaptureApprovedByBankSchema
>;
