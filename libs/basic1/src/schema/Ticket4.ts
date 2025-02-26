import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { FatalErrorEventSchema } from '@blue-repository/blue-contracts';

export const Ticket4Schema = withTypeBlueId(blueIds.Ticket4)(
  z.object({
    name: z.string().optional(),
    a: z.number().optional(),
    b: z.number().optional(),
    c: z.number().optional(),
    d: z.number().optional(),
    error: FatalErrorEventSchema.optional(),
  })
);

export type Ticket4 = z.infer<typeof Ticket4Schema>;
