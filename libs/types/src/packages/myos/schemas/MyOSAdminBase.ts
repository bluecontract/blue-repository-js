import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSAdminBaseSchema = withTypeBlueId(blueIds['MyOS/MyOS Admin Base'])(
  z.object({})
);

export type MyOSAdminBase = z.infer<typeof MyOSAdminBaseSchema>;
