import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';

export const TransactionStatusSchema = withTypeBlueId(
  blueIds['PayNote/Transaction Status']
)(
  z.object({
    authorizedAmountMinor: z.number().optional(),
    capturedAmountMinor: z.number().optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    status: z.string().optional(),
  })
);

export type TransactionStatus = z.infer<typeof TransactionStatusSchema>;
