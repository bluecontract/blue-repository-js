import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentMandateSpendSettledSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Settled']
)(
  ResponseSchema.extend({
    capturedDeltaMinor: z.number().optional(),
    chargeAttemptId: z.string().optional(),
    description: z.string().optional(),
    holdId: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    reservedDeltaMinor: z.number().optional(),
    settledAt: TimestampSchema.optional(),
    status: z.string().optional(),
    transactionId: z.string().optional(),
  })
);

export type PaymentMandateSpendSettled = z.infer<
  typeof PaymentMandateSpendSettledSchema
>;
