import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const TicketSchema = withTypeBlueId(blueIds.Ticket)(
  z.object({
    name: z.string().optional(),
    error: FatalErrorEventSchema.optional(),
    a: z.number().optional(),
  })
);

export type Ticket = z.infer<typeof TicketSchema>;
