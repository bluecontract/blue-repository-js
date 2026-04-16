import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCompletedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completed']
)(
  ResponseSchema.extend({
    amountCompleted: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PaymentCompleted = z.infer<typeof PaymentCompletedSchema>;
