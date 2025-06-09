import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const PriorityTicketSchema = withTypeBlueId(blueIds['Priority Ticket'])(
  z.object({
    name: z.string().optional(),
    error: FatalErrorEventSchema.optional(),
    priority: z.number().optional(),
  })
);

export type PriorityTicket = z.infer<typeof PriorityTicketSchema>;
