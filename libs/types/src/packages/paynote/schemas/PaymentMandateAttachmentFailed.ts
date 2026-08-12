import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PaymentMandateAttachmentFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Mandate Attachment Failed']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentMandateAttachmentFailed = z.infer<
  typeof PaymentMandateAttachmentFailedSchema
>;
