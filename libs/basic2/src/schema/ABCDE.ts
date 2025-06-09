import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ContractSchema } from '@blue-repository/blue-contracts';
import { TicketSchema } from '@blue-repository/basic1';

export const ABCDESchema = withTypeBlueId(blueIds['ABCDE'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    x: ContractSchema.optional(),
    y: TicketSchema.optional(),
  })
);

export type ABCDE = z.infer<typeof ABCDESchema>;
