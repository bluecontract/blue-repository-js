import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const ReserveFundsRequestedSchema = withTypeBlueId(
  blueIds['Reserve Funds Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    amount: z.number().optional(),
  })
);

export type ReserveFundsRequested = z.infer<typeof ReserveFundsRequestedSchema>;
