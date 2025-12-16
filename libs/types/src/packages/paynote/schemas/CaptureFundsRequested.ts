import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const CaptureFundsRequestedSchema = withTypeBlueId(blueIds['PayNote/Capture Funds Requested'])(
  RequestSchema.extend({
    "amount": z.number().int().optional()
  })
);

export type CaptureFundsRequested = z.infer<typeof CaptureFundsRequestedSchema>;
