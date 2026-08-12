import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCompletionLockedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Completion Locked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    lockedAt: zod.lazy(() => TimestampSchema).optional(),
    name: zod.string().optional(),
  })
);

export type PaymentCompletionLocked = z.infer<
  typeof PaymentCompletionLockedSchema
>;
