import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const BootstrapFailedSchema: any = withTypeBlueId(
  blueIds['MyOS/Bootstrap Failed']
)(
  zod.object({
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type BootstrapFailed = z.infer<typeof BootstrapFailedSchema>;
