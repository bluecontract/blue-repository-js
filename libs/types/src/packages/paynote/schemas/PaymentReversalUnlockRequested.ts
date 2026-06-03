import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PaymentReversalUnlockRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Unlock Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentReversalUnlockRequested = z.infer<
  typeof PaymentReversalUnlockRequestedSchema
>;
