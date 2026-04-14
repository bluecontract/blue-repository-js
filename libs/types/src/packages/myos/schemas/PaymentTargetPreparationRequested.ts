import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { RequestSchema } from '../../conversation/schemas/Request';
import { MyOSUserSchema } from './MyOSUser';

export const PaymentTargetPreparationRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Target Preparation Requested']
)(
  RequestSchema.extend({
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
  })
);

export type PaymentTargetPreparationRequested = z.infer<
  typeof PaymentTargetPreparationRequestedSchema
>;
