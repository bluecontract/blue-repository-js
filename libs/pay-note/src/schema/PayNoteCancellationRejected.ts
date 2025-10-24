import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const PayNoteCancellationRejectedSchema = withTypeBlueId(
  blueIds['PayNote Cancellation Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type PayNoteCancellationRejected = z.infer<
  typeof PayNoteCancellationRejectedSchema
>;
