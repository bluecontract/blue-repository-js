import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const TransactionInitiationFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Initiation Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type TransactionInitiationFailed = z.infer<
  typeof TransactionInitiationFailedSchema
>;
