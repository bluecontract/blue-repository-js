import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { EventSchema } from '../../coordination/schemas/Event';
import { CardTransactionDetailsSchema } from './CardTransactionDetails';

const zod = z as any;

export const CardTransactionReportSchema: any = withTypeBlueId(
  blueIds['PayNote/Card Transaction Report']
)(
  EventSchema.extend({
    amountMinor: zod.number().optional(),
    cardTransactionDetails: zod
      .lazy(() => CardTransactionDetailsSchema)
      .optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    merchantId: zod.string().optional(),
    name: zod.string().optional(),
    occurredAt: zod.lazy(() => TimestampSchema).optional(),
    status: zod.string().optional(),
    transactionId: zod.string().optional(),
  })
);

export type CardTransactionReport = z.infer<typeof CardTransactionReportSchema>;
