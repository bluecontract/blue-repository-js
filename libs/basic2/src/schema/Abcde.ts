import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { ContractSchema } from '@blue-repository/blue-contracts';
import { TicketSchema } from '@blue-repository/basic1';

export const AbcdeSchema = withTypeBlueId(blueIds.Abcde)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    x: ContractSchema.optional(),
    y: TicketSchema.optional(),
  })
);

export type Abcde = z.infer<typeof AbcdeSchema>;
