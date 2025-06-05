import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const Ticket2Schema = withTypeBlueId(blueIds['Ticket2'])(
  z.object({
    name: z.string().optional(),
    a: z.number().optional(),
    b: z.number().optional(),
    error: FatalErrorEventSchema.optional(),
  })
);

export type Ticket2 = z.infer<typeof Ticket2Schema>;
