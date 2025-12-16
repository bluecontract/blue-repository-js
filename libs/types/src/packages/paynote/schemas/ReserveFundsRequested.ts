import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const ReserveFundsRequestedSchema = withTypeBlueId(blueIds['PayNote/Reserve Funds Requested'])(
  RequestSchema.extend({
    "amount": z.number().int().optional()
  })
);

export type ReserveFundsRequested = z.infer<typeof ReserveFundsRequestedSchema>;
