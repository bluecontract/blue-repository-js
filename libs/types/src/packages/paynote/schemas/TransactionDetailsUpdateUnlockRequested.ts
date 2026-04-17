import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const TransactionDetailsUpdateUnlockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Unlock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type TransactionDetailsUpdateUnlockRequested = z.infer<
  typeof TransactionDetailsUpdateUnlockRequestedSchema
>;
