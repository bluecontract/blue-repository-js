import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayNoteCancellationRejectedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Cancellation Rejected']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type PayNoteCancellationRejected = z.infer<
  typeof PayNoteCancellationRejectedSchema
>;
