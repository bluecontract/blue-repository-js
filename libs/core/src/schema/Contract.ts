import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { IntegerSchema } from './Integer';

export const ContractSchema = withTypeBlueId(blueIds['Contract'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    order: IntegerSchema.optional(),
  })
);

export type Contract = z.infer<typeof ContractSchema>;
