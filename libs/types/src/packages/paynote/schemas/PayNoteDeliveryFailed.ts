import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const PayNoteDeliveryFailedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PayNoteDeliveryFailed = z.infer<typeof PayNoteDeliveryFailedSchema>;
