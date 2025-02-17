import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const GenericContractSchema = withTypeBlueId(blueIds.GenericContract)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type GenericContract = z.infer<typeof GenericContractSchema>;
