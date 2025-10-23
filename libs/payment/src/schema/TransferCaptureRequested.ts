import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TransferCaptureRequestedSchema = withTypeBlueId(
  blueIds['Transfer Capture Requested']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type TransferCaptureRequested = z.infer<
  typeof TransferCaptureRequestedSchema
>;
