import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const LocalContractSchema = withTypeBlueId(blueIds['Local Contract'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    id: z.number().optional(),
  })
);

export type LocalContract = z.infer<typeof LocalContractSchema>;
