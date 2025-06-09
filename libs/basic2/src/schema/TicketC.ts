import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const TicketCSchema = withTypeBlueId(blueIds['Ticket C'])(
  z.object({
    name: z.string().optional(),
    c: z.number().optional(),
  })
);

export type TicketC = z.infer<typeof TicketCSchema>;
