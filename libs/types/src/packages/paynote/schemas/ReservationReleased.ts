import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const ReservationReleasedSchema: any = withTypeBlueId(
  blueIds['PayNote/Reservation Released']
)(
  ResponseSchema.extend({
    amountReleased: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ReservationReleased = z.infer<typeof ReservationReleasedSchema>;
