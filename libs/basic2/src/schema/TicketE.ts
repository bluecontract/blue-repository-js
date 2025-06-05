import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const TicketESchema = withTypeBlueId(blueIds['Ticket E'])(
  z.object({
    name: z.string().optional(),
    e: z.number().optional(),
  })
);

export type TicketE = z.infer<typeof TicketESchema>;
