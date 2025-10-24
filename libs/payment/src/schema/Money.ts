import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MoneySchema = withTypeBlueId(blueIds['Money'])(
  z.object({
    amount: z.unknown().optional(),
    currency: z.unknown().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Money = z.infer<typeof MoneySchema>;
