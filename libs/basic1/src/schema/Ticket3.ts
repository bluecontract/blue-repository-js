import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const Ticket3Schema = withTypeBlueId(blueIds['Ticket3'])(
  z.object({
    name: z.string().optional(),
    a: z.number().optional(),
    b: z.number().optional(),
    c: z.number().optional(),
    error: FatalErrorEventSchema.optional(),
  })
);

export type Ticket3 = z.infer<typeof Ticket3Schema>;
