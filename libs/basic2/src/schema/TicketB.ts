import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const TicketBSchema = withTypeBlueId(blueIds.TicketB)(
  z.object({
    name: z.string().optional(),
    b: z.number().optional(),
  })
);

export type TicketB = z.infer<typeof TicketBSchema>;
