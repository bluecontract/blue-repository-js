import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentMandateSpendSettledSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Settled']
)(
  ResponseSchema.extend({
    authorizationId: zod.string().optional(),
    capturedDeltaMinor: zod.number().optional(),
    description: zod.string().optional(),
    holdId: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    reservedDeltaMinor: zod.number().optional(),
    settledAt: zod.lazy(() => TimestampSchema).optional(),
    settlementId: zod.string().optional(),
    status: zod.string().optional(),
    transactionId: zod.string().optional(),
  })
);

export type PaymentMandateSpendSettled = z.infer<
  typeof PaymentMandateSpendSettledSchema
>;
