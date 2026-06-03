import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const PayNoteDeliveryFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery Failed']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PayNoteDeliveryFailed = z.infer<typeof PayNoteDeliveryFailedSchema>;
