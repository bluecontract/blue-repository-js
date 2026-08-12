import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const TransactionDetailsUpdateLockRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Lock Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type TransactionDetailsUpdateLockRequested = z.infer<
  typeof TransactionDetailsUpdateLockRequestedSchema
>;
