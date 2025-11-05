import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';

export const ReservationReleaseDeclinedSchema = withTypeBlueId(
  blueIds['Reservation Release Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type ReservationReleaseDeclined = z.infer<
  typeof ReservationReleaseDeclinedSchema
>;
