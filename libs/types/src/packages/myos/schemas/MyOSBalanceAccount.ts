import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSBalanceAccountSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Balance Account']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    token: zod.string().optional(),
  })
);

export type MyOSBalanceAccount = z.infer<typeof MyOSBalanceAccountSchema>;
