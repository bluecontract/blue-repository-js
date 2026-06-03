import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCompletionLockChangeFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Completion Lock Change Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentCompletionLockChangeFailed = z.infer<
  typeof PaymentCompletionLockChangeFailedSchema
>;
