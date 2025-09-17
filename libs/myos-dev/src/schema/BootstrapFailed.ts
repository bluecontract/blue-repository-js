import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const BootstrapFailedSchema = withTypeBlueId(
  blueIds['Bootstrap Failed']
)(
  z.object({
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type BootstrapFailed = z.infer<typeof BootstrapFailedSchema>;
