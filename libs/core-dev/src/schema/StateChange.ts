import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const StateChangeSchema = withTypeBlueId(blueIds['State Change'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    state: z.unknown().optional(),
  })
);

export type StateChange = z.infer<typeof StateChangeSchema>;
