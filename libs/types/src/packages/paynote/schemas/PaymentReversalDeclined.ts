import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentReversalDeclinedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Declined']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentReversalDeclined = z.infer<
  typeof PaymentReversalDeclinedSchema
>;
