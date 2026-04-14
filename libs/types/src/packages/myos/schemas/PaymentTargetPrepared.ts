import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { ResponseSchema } from '../../conversation/schemas/Response';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSUserSchema } from './MyOSUser';

export const PaymentTargetPreparedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Target Prepared']
)(
  ResponseSchema.extend({
    allowedPayer: MyOSUserSchema.optional(),
    amount: z.number().optional(),
    context: z
      .object({
        description: z.string().optional(),
        documentId: z.string().optional(),
      })
      .optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    expectedPaynote: blueNodeField().optional(),
    expiresAt: z.string().optional(),
    name: z.string().optional(),
    recipient: MyOSBalanceAccountSchema.optional(),
  })
);

export type PaymentTargetPrepared = z.infer<typeof PaymentTargetPreparedSchema>;
