import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/core-dev';

export const CaptureFundsRequestedSchema = withTypeBlueId(
  blueIds['Capture Funds Requested']
)(
  RequestSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    amount: z.number().optional(),
  })
);

export type CaptureFundsRequested = z.infer<typeof CaptureFundsRequestedSchema>;
