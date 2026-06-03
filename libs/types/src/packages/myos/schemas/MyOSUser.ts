import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSUserSchema: any = withTypeBlueId(blueIds['MyOS/MyOS User'])(
  zod.object({
    accountId: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSUser = z.infer<typeof MyOSUserSchema>;
