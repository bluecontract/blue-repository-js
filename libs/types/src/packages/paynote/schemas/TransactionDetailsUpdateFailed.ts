import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const TransactionDetailsUpdateFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Details Update Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type TransactionDetailsUpdateFailed = z.infer<
  typeof TransactionDetailsUpdateFailedSchema
>;
