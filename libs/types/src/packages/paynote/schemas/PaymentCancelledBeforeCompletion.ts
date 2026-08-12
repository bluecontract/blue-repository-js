import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCancelledBeforeCompletionSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Cancelled Before Completion']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PaymentCancelledBeforeCompletion = z.infer<
  typeof PaymentCancelledBeforeCompletionSchema
>;
