import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CardChargeCompletedSchema = withTypeBlueId(
  blueIds['PayNote/Card Charge Completed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    holdId: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
    transactionId: z.string().optional(),
  })
);

export type CardChargeCompleted = z.infer<typeof CardChargeCompletedSchema>;
