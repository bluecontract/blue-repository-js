import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CurrencySchema: any = withTypeBlueId(blueIds['Common/Currency'])(
  zod.string() as unknown as z.ZodObject<any>
);

export type Currency = z.infer<typeof CurrencySchema>;
