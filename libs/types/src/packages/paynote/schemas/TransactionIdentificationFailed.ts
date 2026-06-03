import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const TransactionIdentificationFailedSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Identification Failed']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type TransactionIdentificationFailed = z.infer<
  typeof TransactionIdentificationFailedSchema
>;
