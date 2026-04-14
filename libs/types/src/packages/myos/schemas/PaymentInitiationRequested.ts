import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { RequestSchema } from '../../conversation/schemas/Request';
import { ChannelSchema } from '../../core/schemas/Channel';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';

export const PaymentInitiationRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    context: z
      .object({
        description: z.string().optional(),
        documentId: z.string().optional(),
      })
      .optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    idempotencyKey: z.string().optional(),
    name: z.string().optional(),
    paynote: z
      .object({
        channelBindings: z.record(z.string(), ChannelSchema).optional(),
        description: z.string().optional(),
        document: blueNodeField().optional(),
      })
      .optional(),
    recipient: MyOSBalanceAccountSchema.optional(),
  })
);

export type PaymentInitiationRequested = z.infer<
  typeof PaymentInitiationRequestedSchema
>;
