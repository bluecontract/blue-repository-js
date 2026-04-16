import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PaymentReversalLockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Lock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentReversalLockRequested = z.infer<
  typeof PaymentReversalLockRequestedSchema
>;
