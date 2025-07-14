import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const EventSchema = withTypeBlueId(blueIds['Event'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type Event = z.infer<typeof EventSchema>;
