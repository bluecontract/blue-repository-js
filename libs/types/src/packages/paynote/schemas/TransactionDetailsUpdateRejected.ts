import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const TransactionDetailsUpdateRejectedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Rejected']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type TransactionDetailsUpdateRejected = z.infer<
  typeof TransactionDetailsUpdateRejectedSchema
>;
