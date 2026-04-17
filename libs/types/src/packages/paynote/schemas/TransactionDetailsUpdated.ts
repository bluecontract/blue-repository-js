import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const TransactionDetailsUpdatedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Details Updated']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type TransactionDetailsUpdated = z.infer<
  typeof TransactionDetailsUpdatedSchema
>;
