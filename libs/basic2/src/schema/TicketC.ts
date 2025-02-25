import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const TicketCSchema = withTypeBlueId(blueIds.TicketC)(
  z.object({
    name: z.string().optional(),
    c: z.number().optional(),
  })
);

export type TicketC = z.infer<typeof TicketCSchema>;
