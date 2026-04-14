import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentInitiationAcceptedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Initiation Accepted']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PaymentInitiationAccepted = z.infer<
  typeof PaymentInitiationAcceptedSchema
>;
