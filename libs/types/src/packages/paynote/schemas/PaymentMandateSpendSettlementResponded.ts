import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentMandateSpendSettlementRespondedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Settlement Responded']
)(
  ResponseSchema.extend({
    amountCaptured: z.number().optional(),
    amountReserved: z.number().optional(),
    chargeAttemptId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    respondedAt: TimestampSchema.optional(),
    status: z.string().optional(),
  })
);

export type PaymentMandateSpendSettlementResponded = z.infer<
  typeof PaymentMandateSpendSettlementRespondedSchema
>;
