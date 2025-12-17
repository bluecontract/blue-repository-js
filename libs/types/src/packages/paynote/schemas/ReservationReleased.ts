import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const ReservationReleasedSchema = withTypeBlueId(
  blueIds['PayNote/Reservation Released']
)(
  ResponseSchema.extend({
    amountReleased: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ReservationReleased = z.infer<typeof ReservationReleasedSchema>;
