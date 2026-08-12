import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const TransactionDetailsUpdateLockedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Locked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    lockedAt: zod.lazy(() => TimestampSchema).optional(),
    name: zod.string().optional(),
  })
);

export type TransactionDetailsUpdateLocked = z.infer<
  typeof TransactionDetailsUpdateLockedSchema
>;
