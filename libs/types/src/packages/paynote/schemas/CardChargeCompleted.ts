import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CardChargeCompletedSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Charge Completed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    holdId: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    status: zod.string().optional(),
    transactionId: zod.string().optional(),
  })
);

export type CardChargeCompleted = z.infer<typeof CardChargeCompletedSchema>;
