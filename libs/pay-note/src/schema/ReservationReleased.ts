import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const ReservationReleasedSchema = withTypeBlueId(
  blueIds['Reservation Released']
)(
  ResponseSchema.extend({
    amountReleased: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ReservationReleased = z.infer<typeof ReservationReleasedSchema>;
