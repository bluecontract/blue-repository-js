import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCompletionDeclinedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completion Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentCompletionDeclined = z.infer<
  typeof PaymentCompletionDeclinedSchema
>;
