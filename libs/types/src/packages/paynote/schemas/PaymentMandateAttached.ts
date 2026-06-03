import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PaymentMandateAttachedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Attached']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    paymentMandateDocumentId: zod.string().optional(),
  })
);

export type PaymentMandateAttached = z.infer<
  typeof PaymentMandateAttachedSchema
>;
