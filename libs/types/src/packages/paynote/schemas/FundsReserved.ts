import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const FundsReservedSchema = withTypeBlueId(
  blueIds['PayNote/Funds Reserved']
)(
  ResponseSchema.extend({
    amountReserved: z.number().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type FundsReserved = z.infer<typeof FundsReservedSchema>;
