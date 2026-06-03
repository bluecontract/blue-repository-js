import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentInitiationAcceptedSchema: any = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Accepted']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PaymentInitiationAccepted = z.infer<
  typeof PaymentInitiationAcceptedSchema
>;
