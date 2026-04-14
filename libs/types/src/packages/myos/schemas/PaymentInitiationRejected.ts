import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentInitiationRejectedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Rejected']
)(
  ResponseSchema.extend({
    code: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentInitiationRejected = z.infer<
  typeof PaymentInitiationRejectedSchema
>;
