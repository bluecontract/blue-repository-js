import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCancellationDeclinedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Cancellation Declined']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentCancellationDeclined = z.infer<
  typeof PaymentCancellationDeclinedSchema
>;
