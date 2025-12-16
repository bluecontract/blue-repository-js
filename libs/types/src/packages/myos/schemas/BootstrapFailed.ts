import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const BootstrapFailedSchema = withTypeBlueId(blueIds['MyOS/Bootstrap Failed'])(
  z.object({
    "reason": z.string().optional()
  })
);

export type BootstrapFailed = z.infer<typeof BootstrapFailedSchema>;
