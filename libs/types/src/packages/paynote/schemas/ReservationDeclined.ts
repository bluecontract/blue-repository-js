import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const ReservationDeclinedSchema = withTypeBlueId(blueIds['PayNote/Reservation Declined'])(
  ResponseSchema.extend({
    "reason": z.string().optional()
  })
);

export type ReservationDeclined = z.infer<typeof ReservationDeclinedSchema>;
