import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PaymentTargetPreparationFailedSchema = withTypeBlueId(
  blueIds['MyOS/Payment Target Preparation Failed']
)(
  ResponseSchema.extend({
    code: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type PaymentTargetPreparationFailed = z.infer<
  typeof PaymentTargetPreparationFailedSchema
>;
