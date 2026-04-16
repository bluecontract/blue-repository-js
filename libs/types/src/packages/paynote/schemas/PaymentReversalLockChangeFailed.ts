import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentReversalLockChangeFailedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Lock Change Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentReversalLockChangeFailed = z.infer<
  typeof PaymentReversalLockChangeFailedSchema
>;
