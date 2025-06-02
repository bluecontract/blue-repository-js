import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const TicketCSchema = withTypeBlueId(blueIds.TicketC)(
  z.object({
    name: z.string().optional(),
    c: z.number().optional(),
  })
);

export type TicketC = z.infer<typeof TicketCSchema>;
