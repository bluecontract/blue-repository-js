import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ContractSchema = withTypeBlueId(blueIds['Core/Contract'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    order: z.number().optional(),
  })
);

export type Contract = z.infer<typeof ContractSchema>;
