import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { CardTransactionReportSchema } from './CardTransactionReport';

export const EligibleCardTransactionReportedSchema = withTypeBlueId(
  blueIds['PayNote/Eligible Card Transaction Reported']
)(
  EventSchema.extend({
    description: z.string().optional(),
    eligibleCashbackMinor: z.number().optional(),
    name: z.string().optional(),
    report: CardTransactionReportSchema.optional(),
  })
);

export type EligibleCardTransactionReported = z.infer<
  typeof EligibleCardTransactionReportedSchema
>;
