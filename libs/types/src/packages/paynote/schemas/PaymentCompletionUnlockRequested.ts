import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PaymentCompletionUnlockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completion Unlock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentCompletionUnlockRequested = z.infer<
  typeof PaymentCompletionUnlockRequestedSchema
>;
