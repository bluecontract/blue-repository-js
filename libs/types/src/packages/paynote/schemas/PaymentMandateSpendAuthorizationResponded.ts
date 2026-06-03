import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentMandateSpendAuthorizationRespondedSchema: any =
  withTypeBlueId(
    blueIds['PayNote/Payment Mandate Spend Authorization Responded']
  )(
    ResponseSchema.extend({
      authorizationId: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      reason: zod.string().optional(),
      remainingAmountMinor: zod.number().optional(),
      respondedAt: zod.lazy(() => TimestampSchema).optional(),
      status: zod.string().optional(),
    })
  );

export type PaymentMandateSpendAuthorizationResponded = z.infer<
  typeof PaymentMandateSpendAuthorizationRespondedSchema
>;
