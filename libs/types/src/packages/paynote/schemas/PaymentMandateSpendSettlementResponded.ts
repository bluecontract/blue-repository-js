import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentMandateSpendSettlementRespondedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Spend Settlement Responded']
)(
  ResponseSchema.extend({
    amountCaptured: zod.number().optional(),
    amountReserved: zod.number().optional(),
    authorizationId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    respondedAt: zod.lazy(() => TimestampSchema).optional(),
    settlementId: zod.string().optional(),
    status: zod.string().optional(),
  })
);

export type PaymentMandateSpendSettlementResponded = z.infer<
  typeof PaymentMandateSpendSettlementRespondedSchema
>;
