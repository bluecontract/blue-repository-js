import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../conversation/schemas/Event';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

export const CardTransactionReportSchema = withTypeBlueId(
  blueIds['PayNote/Card Transaction Report']
)(
  EventSchema.extend({
    amountMinor: z.number().optional(),
    cardTransactionDetails: CardTransactionDetailsSchema.optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    merchantId: z.string().optional(),
    name: z.string().optional(),
    occurredAt: TimestampSchema.optional(),
    transactionId: z.string().optional(),
  })
);

export type CardTransactionReport = z.infer<typeof CardTransactionReportSchema>;
