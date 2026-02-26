import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const PaymentMandateAttachmentFailedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Attachment Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentMandateAttachmentFailed = z.infer<
  typeof PaymentMandateAttachmentFailedSchema
>;
