import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MoneySchema = withTypeBlueId(blueIds['Money'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    amount: z.number().optional(),
    currency: z.string().optional(),
  })
);

export type Money = z.infer<typeof MoneySchema>;
