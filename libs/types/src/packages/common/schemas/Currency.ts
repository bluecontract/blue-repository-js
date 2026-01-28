import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CurrencySchema = withTypeBlueId(blueIds['Common/Currency'])(
  z.string() as unknown as z.ZodObject<any>
);

export type Currency = z.infer<typeof CurrencySchema>;
