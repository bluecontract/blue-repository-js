import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentReversalLockedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Locked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    lockedAt: TimestampSchema.optional(),
    name: z.string().optional(),
  })
);

export type PaymentReversalLocked = z.infer<typeof PaymentReversalLockedSchema>;
