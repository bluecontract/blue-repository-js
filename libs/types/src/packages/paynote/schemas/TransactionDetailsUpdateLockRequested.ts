import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const TransactionDetailsUpdateLockRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Lock Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type TransactionDetailsUpdateLockRequested = z.infer<
  typeof TransactionDetailsUpdateLockRequestedSchema
>;
