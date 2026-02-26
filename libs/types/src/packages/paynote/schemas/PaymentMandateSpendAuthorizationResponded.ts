import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentMandateSpendAuthorizationRespondedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Authorization Responded']
)(
  ResponseSchema.extend({
    chargeAttemptId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    remainingAmountMinor: z.number().optional(),
    respondedAt: TimestampSchema.optional(),
    status: z.string().optional(),
  })
);

export type PaymentMandateSpendAuthorizationResponded = z.infer<
  typeof PaymentMandateSpendAuthorizationRespondedSchema
>;
