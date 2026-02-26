import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PaymentMandateSpendAuthorizationRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Authorization Requested']
)(
  RequestSchema.extend({
    amountMinor: z.number().optional(),
    chargeAttemptId: z.string().optional(),
    chargeMode: z.string().optional(),
    counterpartyId: z.string().optional(),
    counterpartyType: z.string().optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    requestedAt: TimestampSchema.optional(),
    requestingDocumentId: z.string().optional(),
    requestingSessionId: z.string().optional(),
  })
);

export type PaymentMandateSpendAuthorizationRequested = z.infer<
  typeof PaymentMandateSpendAuthorizationRequestedSchema
>;
