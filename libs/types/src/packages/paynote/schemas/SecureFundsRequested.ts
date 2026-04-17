import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const SecureFundsRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Secure Funds Requested']
)(
  RequestSchema.extend({
    amount: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type SecureFundsRequested = z.infer<typeof SecureFundsRequestedSchema>;
