import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const TransactionDetailsUpdateRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type TransactionDetailsUpdateRequested = z.infer<
  typeof TransactionDetailsUpdateRequestedSchema
>;
