import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

export const PaymentReversalUnlockedSchema = withTypeBlueId(
  blueIds['PayNote/Payment Reversal Unlocked']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    unlockedAt: z.lazy(() => TimestampSchema).optional(),
  })
);

export type PaymentReversalUnlocked = z.infer<
  typeof PaymentReversalUnlockedSchema
>;
