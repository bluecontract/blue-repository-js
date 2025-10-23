import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const FundsReservedSchema = withTypeBlueId(blueIds['Funds Reserved'])(
  ResponseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    amountReserved: z.number().optional(),
  })
);

export type FundsReserved = z.infer<typeof FundsReservedSchema>;
