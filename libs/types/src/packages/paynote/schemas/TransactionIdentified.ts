import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const TransactionIdentifiedSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Identified']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type TransactionIdentified = z.infer<typeof TransactionIdentifiedSchema>;
