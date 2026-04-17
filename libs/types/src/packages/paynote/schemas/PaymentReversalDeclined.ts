import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentReversalDeclinedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentReversalDeclined = z.infer<
  typeof PaymentReversalDeclinedSchema
>;
