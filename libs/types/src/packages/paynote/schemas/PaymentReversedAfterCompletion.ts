import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentReversedAfterCompletionSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Reversed After Completion']
)(
  ResponseSchema.extend({
    amountReversed: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PaymentReversedAfterCompletion = z.infer<
  typeof PaymentReversedAfterCompletionSchema
>;
