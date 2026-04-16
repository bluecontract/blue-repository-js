import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentCompletionLockChangeFailedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Completion Lock Change Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentCompletionLockChangeFailed = z.infer<
  typeof PaymentCompletionLockChangeFailedSchema
>;
