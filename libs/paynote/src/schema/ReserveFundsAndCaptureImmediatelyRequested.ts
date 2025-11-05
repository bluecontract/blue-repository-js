import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const ReserveFundsAndCaptureImmediatelyRequestedSchema = withTypeBlueId(
  blueIds['Reserve Funds and Capture Immediately Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ReserveFundsAndCaptureImmediatelyRequested = z.infer<
  typeof ReserveFundsAndCaptureImmediatelyRequestedSchema
>;
