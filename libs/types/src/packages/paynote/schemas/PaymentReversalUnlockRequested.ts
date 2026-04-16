import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PaymentReversalUnlockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Unlock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentReversalUnlockRequested = z.infer<
  typeof PaymentReversalUnlockRequestedSchema
>;
