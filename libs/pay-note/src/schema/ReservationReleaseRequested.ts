import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const ReservationReleaseRequestedSchema = withTypeBlueId(
  blueIds['Reservation Release Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    amount: z.number().optional(),
  })
);

export type ReservationReleaseRequested = z.infer<
  typeof ReservationReleaseRequestedSchema
>;
