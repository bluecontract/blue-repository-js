import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const PaymentMandateAttachedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Attached']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    paymentMandateDocumentId: z.string().optional(),
  })
);

export type PaymentMandateAttached = z.infer<
  typeof PaymentMandateAttachedSchema
>;
