import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSBalanceAccountSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Balance Account']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    token: z.string().optional(),
  })
);

export type MyOSBalanceAccount = z.infer<typeof MyOSBalanceAccountSchema>;
