import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { RequestSchema } from '../../coordination/schemas/Request';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';

const zod = z as any;

export const PaymentInitiationRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    context: zod
      .object({
        description: zod.string().optional(),
        documentId: zod.string().optional(),
      })
      .optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    idempotencyKey: zod.string().optional(),
    name: zod.string().optional(),
    paynote: zod
      .object({
        channelBindings: zod.record(zod.string(), blueNodeField()).optional(),
        description: zod.string().optional(),
        document: blueNodeField().optional(),
      })
      .optional(),
    recipient: zod.lazy(() => MyOSBalanceAccountSchema).optional(),
  })
);

export type PaymentInitiationRequested = z.infer<
  typeof PaymentInitiationRequestedSchema
>;
