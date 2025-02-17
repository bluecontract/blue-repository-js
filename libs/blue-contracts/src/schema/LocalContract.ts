import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const LocalContractSchema = withTypeBlueId(blueIds.LocalContract)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    id: z.number().optional(),
  })
);

export type LocalContract = z.infer<typeof LocalContractSchema>;
