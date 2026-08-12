import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { RequestSchema } from '../../coordination/schemas/Request';
import { MyOSUserSchema } from './MyOSUser';

const zod = z as any;

export const PaymentTargetPreparationRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Target Preparation Requested']
)(
  RequestSchema.extend({
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
  })
);

export type PaymentTargetPreparationRequested = z.infer<
  typeof PaymentTargetPreparationRequestedSchema
>;
