import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';

const zod = z as any;

export const TransactionStatusSchema: any = withTypeBlueId(
  blueIds['PayNote/Transaction Status']
)(
  zod.object({
    authorizedAmountMinor: zod.number().optional(),
    capturedAmountMinor: zod.number().optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.string().optional(),
  })
);

export type TransactionStatus = z.infer<typeof TransactionStatusSchema>;
