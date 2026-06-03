import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const FundsReservedSchema: any = withTypeBlueId(
  blueIds['PayNote/Funds Reserved']
)(
  ResponseSchema.extend({
    amountReserved: zod.number().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type FundsReserved = z.infer<typeof FundsReservedSchema>;
