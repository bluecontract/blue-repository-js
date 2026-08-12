import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const ReservationReleaseRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Reservation Release Requested']
)(
  RequestSchema.extend({
    amount: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ReservationReleaseRequested = z.infer<
  typeof ReservationReleaseRequestedSchema
>;
