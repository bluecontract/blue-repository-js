import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PaymentCompletionLockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completion Lock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentCompletionLockRequested = z.infer<
  typeof PaymentCompletionLockRequestedSchema
>;
