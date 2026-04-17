import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCompletionLockedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completion Locked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    lockedAt: TimestampSchema.optional(),
    name: z.string().optional(),
  })
);

export type PaymentCompletionLocked = z.infer<
  typeof PaymentCompletionLockedSchema
>;
