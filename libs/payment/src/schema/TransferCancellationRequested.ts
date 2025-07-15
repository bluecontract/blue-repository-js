import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TransferCancellationRequestedSchema = withTypeBlueId(
  blueIds['Transfer Cancellation Requested']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type TransferCancellationRequested = z.infer<
  typeof TransferCancellationRequestedSchema
>;
