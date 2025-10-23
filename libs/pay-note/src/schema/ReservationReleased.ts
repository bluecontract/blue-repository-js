import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const ReservationReleasedSchema = withTypeBlueId(
  blueIds['Reservation Released']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    amountReleased: z.number().optional(),
  })
);

export type ReservationReleased = z.infer<typeof ReservationReleasedSchema>;
