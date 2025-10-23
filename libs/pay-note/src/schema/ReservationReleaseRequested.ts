import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const ReservationReleaseRequestedSchema = withTypeBlueId(
  blueIds['Reservation Release Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ReservationReleaseRequested = z.infer<
  typeof ReservationReleaseRequestedSchema
>;
