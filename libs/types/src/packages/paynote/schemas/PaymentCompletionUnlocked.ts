import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PaymentCompletionUnlockedSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Completion Unlocked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    unlockedAt: zod.lazy(() => TimestampSchema).optional(),
  })
);

export type PaymentCompletionUnlocked = z.infer<
  typeof PaymentCompletionUnlockedSchema
>;
