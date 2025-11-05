import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const ReserveFundsRequestedSchema = withTypeBlueId(
  blueIds['Reserve Funds Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ReserveFundsRequested = z.infer<typeof ReserveFundsRequestedSchema>;
