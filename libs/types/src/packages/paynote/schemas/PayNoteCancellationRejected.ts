import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayNoteCancellationRejectedSchema = withTypeBlueId(blueIds['PayNote/PayNote Cancellation Rejected'])(
  ResponseSchema.extend({
    "reason": z.string().optional()
  })
);

export type PayNoteCancellationRejected = z.infer<typeof PayNoteCancellationRejectedSchema>;
