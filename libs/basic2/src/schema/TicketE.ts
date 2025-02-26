import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const TicketESchema = withTypeBlueId(blueIds.TicketE)(
  z.object({
    name: z.string().optional(),
    e: z.number().optional(),
  })
);

export type TicketE = z.infer<typeof TicketESchema>;
