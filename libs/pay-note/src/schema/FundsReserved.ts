import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const FundsReservedSchema = withTypeBlueId(blueIds['Funds Reserved'])(
  ResponseSchema.extend({
    amountReserved: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type FundsReserved = z.infer<typeof FundsReservedSchema>;
