import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TicketDSchema = withTypeBlueId(blueIds['Ticket D'])(
  z.object({
    name: z.string().optional(),
    d: z.number().optional(),
  })
);

export type TicketD = z.infer<typeof TicketDSchema>;
