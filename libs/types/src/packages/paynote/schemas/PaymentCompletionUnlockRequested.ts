import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PaymentCompletionUnlockRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Completion Unlock Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PaymentCompletionUnlockRequested = z.infer<
  typeof PaymentCompletionUnlockRequestedSchema
>;
