import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentReversedAfterCompletionSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversed After Completion']
)(
  ResponseSchema.extend({
    amountReversed: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PaymentReversedAfterCompletion = z.infer<
  typeof PaymentReversedAfterCompletionSchema
>;
