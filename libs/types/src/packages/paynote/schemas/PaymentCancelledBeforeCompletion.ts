import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCancelledBeforeCompletionSchema = withTypeBlueId(
  blueIds['PayNote/Payment Cancelled Before Completion']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PaymentCancelledBeforeCompletion = z.infer<
  typeof PaymentCancelledBeforeCompletionSchema
>;
