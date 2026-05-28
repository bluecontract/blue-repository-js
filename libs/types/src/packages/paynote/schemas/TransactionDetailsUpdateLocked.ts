import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

export const TransactionDetailsUpdateLockedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Locked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    lockedAt: z.lazy(() => TimestampSchema).optional(),
    name: z.string().optional(),
  })
);

export type TransactionDetailsUpdateLocked = z.infer<
  typeof TransactionDetailsUpdateLockedSchema
>;
