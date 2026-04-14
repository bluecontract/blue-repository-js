import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSUserSchema = withTypeBlueId(blueIds['MyOS/MyOS User'])(
  z.object({
    accountId: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSUser = z.infer<typeof MyOSUserSchema>;
