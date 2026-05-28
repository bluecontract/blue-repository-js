import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSUserSchema } from './MyOSUser';

export const PaymentTargetPreparedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Target Prepared']
)(
  ResponseSchema.extend({
    allowedPayer: z.lazy(() => MyOSUserSchema).optional(),
    amount: z.number().optional(),
    context: z
      .object({
        description: z.string().optional(),
        documentId: z.string().optional(),
      })
      .optional(),
    currency: z.lazy(() => CurrencySchema).optional(),
    description: z.string().optional(),
    expectedPaynote: blueNodeField().optional(),
    expiresAt: z.string().optional(),
    name: z.string().optional(),
    recipient: z.lazy(() => MyOSBalanceAccountSchema).optional(),
  })
);

export type PaymentTargetPrepared = z.infer<typeof PaymentTargetPreparedSchema>;
