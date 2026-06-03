import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const TransactionDetailsUpdatedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Details Updated']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type TransactionDetailsUpdated = z.infer<
  typeof TransactionDetailsUpdatedSchema
>;
