import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { PayNoteDeliverySchema } from './PayNoteDelivery';

export const PayNoteDeliveryBootstrapRequestedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Delivery Bootstrap Requested']
)(
  EventSchema.extend({
    delivery: PayNoteDeliverySchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteDeliveryBootstrapRequested = z.infer<
  typeof PayNoteDeliveryBootstrapRequestedSchema
>;
