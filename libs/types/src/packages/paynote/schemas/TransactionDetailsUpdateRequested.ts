import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const TransactionDetailsUpdateRequestedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type TransactionDetailsUpdateRequested = z.infer<
  typeof TransactionDetailsUpdateRequestedSchema
>;
