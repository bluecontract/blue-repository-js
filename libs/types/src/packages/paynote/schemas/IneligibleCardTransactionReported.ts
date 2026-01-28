import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { CardTransactionReportSchema } from './CardTransactionReport';

export const IneligibleCardTransactionReportedSchema = withTypeBlueId(
  blueIds['PayNote/Ineligible Card Transaction Reported']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    report: CardTransactionReportSchema.optional(),
  })
);

export type IneligibleCardTransactionReported = z.infer<
  typeof IneligibleCardTransactionReportedSchema
>;
