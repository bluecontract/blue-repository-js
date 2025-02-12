import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const PriorityTicketSchema = withTypeBlueId(blueIds.PriorityTicket)(
  z.object({
    name: z.string().optional(),
    error: FatalErrorEventSchema.optional(),
    priority: z.number().optional(),
  })
);

export type PriorityTicket = z.infer<typeof PriorityTicketSchema>;
