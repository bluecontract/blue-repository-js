import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';

export const PaymentMandateChargeAttemptStateSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Charge Attempt State']
)(
  z.object({
    amountMinor: z.number().optional(),
    authorizationReason: z.string().optional(),
    authorizationRespondedAt: TimestampSchema.optional(),
    authorizationStatus: z.string().optional(),
    authorizedAmountMinor: z.number().optional(),
    capturedDeltaMinor: z.number().optional(),
    chargeMode: z.string().optional(),
    counterpartyId: z.string().optional(),
    counterpartyType: z.string().optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    holdId: z.string().optional(),
    lastSettlementProcessingStatus: z.string().optional(),
    lastSettlementRequestStatus: z.string().optional(),
    name: z.string().optional(),
    reservedDeltaMinor: z.number().optional(),
    settled: z.boolean().optional(),
    settlementReason: z.string().optional(),
    settlementRespondedAt: TimestampSchema.optional(),
    transactionId: z.string().optional(),
  })
);

export type PaymentMandateChargeAttemptState = z.infer<
  typeof PaymentMandateChargeAttemptStateSchema
>;
