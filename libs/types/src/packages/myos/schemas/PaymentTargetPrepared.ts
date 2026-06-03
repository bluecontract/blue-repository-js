import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { MyOSBalanceAccountSchema } from './MyOSBalanceAccount';
import { MyOSUserSchema } from './MyOSUser';

const zod = z as any;

export const PaymentTargetPreparedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Target Prepared']
)(
  ResponseSchema.extend({
    allowedPayer: zod.lazy(() => MyOSUserSchema).optional(),
    amount: zod.number().optional(),
    context: zod
      .object({
        description: zod.string().optional(),
        documentId: zod.string().optional(),
      })
      .optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    expectedPaynote: blueNodeField().optional(),
    expiresAt: zod.string().optional(),
    name: zod.string().optional(),
    recipient: zod.lazy(() => MyOSBalanceAccountSchema).optional(),
  })
);

export type PaymentTargetPrepared = z.infer<typeof PaymentTargetPreparedSchema>;
