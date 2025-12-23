import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const ReservationReleaseDeclinedSchema = withTypeBlueId(
  blueIds['PayNote/Reservation Release Declined']
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
