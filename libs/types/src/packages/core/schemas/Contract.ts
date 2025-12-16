import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ContractSchema = withTypeBlueId(blueIds['Core/Contract'])(
  z.object({
    "order": z.number().int().optional()
  })
);

export type Contract = z.infer<typeof ContractSchema>;
