import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const ReservationReleaseDeclinedSchema = withTypeBlueId(
  blueIds['Reservation Release Declined']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type ReservationReleaseDeclined = z.infer<
  typeof ReservationReleaseDeclinedSchema
>;
