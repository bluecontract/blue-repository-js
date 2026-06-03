import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCompletedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Completed']
)(
  ResponseSchema.extend({
    amountCompleted: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PaymentCompleted = z.infer<typeof PaymentCompletedSchema>;
