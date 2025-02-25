import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const TicketDSchema = withTypeBlueId(blueIds.TicketD)(
  z.object({
    name: z.string().optional(),
    d: z.number().optional(),
  })
);

export type TicketD = z.infer<typeof TicketDSchema>;
