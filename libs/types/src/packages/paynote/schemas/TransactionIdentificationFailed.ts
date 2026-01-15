import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const TransactionIdentificationFailedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Identification Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type TransactionIdentificationFailed = z.infer<
  typeof TransactionIdentificationFailedSchema
>;
