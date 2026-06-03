import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PaymentMandateSpendAuthorizationRequestedSchema: any =
  withTypeBlueId(
    blueIds['PayNote/Payment Mandate Spend Authorization Requested']
  )(
    RequestSchema.extend({
      amountMinor: zod.number().optional(),
      authorizationId: zod.string().optional(),
      counterpartyId: zod.string().optional(),
      counterpartyType: zod.string().optional(),
      currency: zod.lazy(() => CurrencySchema).optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      requestedAt: zod.lazy(() => TimestampSchema).optional(),
      requestingDocumentId: zod.string().optional(),
      requestingSessionId: zod.string().optional(),
    })
  );

export type PaymentMandateSpendAuthorizationRequested = z.infer<
  typeof PaymentMandateSpendAuthorizationRequestedSchema
>;
