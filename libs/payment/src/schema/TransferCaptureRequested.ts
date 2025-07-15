import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TransferCaptureRequestedSchema = withTypeBlueId(
  blueIds['Transfer Capture Requested']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type TransferCaptureRequested = z.infer<
  typeof TransferCaptureRequestedSchema
>;
