import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentInitiationRejectedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Rejected']
)(
  ResponseSchema.extend({
    code: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentInitiationRejected = z.infer<
  typeof PaymentInitiationRejectedSchema
>;
