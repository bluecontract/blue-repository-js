import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCancellationDeclinedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Cancellation Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentCancellationDeclined = z.infer<
  typeof PaymentCancellationDeclinedSchema
>;
