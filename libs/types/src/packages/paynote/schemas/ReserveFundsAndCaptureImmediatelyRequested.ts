import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const ReserveFundsAndCaptureImmediatelyRequestedSchema = withTypeBlueId(blueIds['PayNote/Reserve Funds and Capture Immediately Requested'])(
  RequestSchema.extend({
    "amount": z.number().int().optional()
  })
);

export type ReserveFundsAndCaptureImmediatelyRequested = z.infer<typeof ReserveFundsAndCaptureImmediatelyRequestedSchema>;
