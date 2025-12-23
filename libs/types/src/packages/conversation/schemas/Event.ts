import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const EventSchema = withTypeBlueId(blueIds['Conversation/Event'])(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type Event = z.infer<typeof EventSchema>;
