import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FundsReservedSchema = withTypeBlueId(blueIds['PayNote/Funds Reserved'])(
  ResponseSchema.extend({
    "amountReserved": z.number().int().optional()
  })
);

export type FundsReserved = z.infer<typeof FundsReservedSchema>;
