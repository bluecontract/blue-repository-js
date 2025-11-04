import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ChatMessageSchema = withTypeBlueId(blueIds['Chat Message'])(
  EventSchema.extend({
    description: z.string().optional(),
    message: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
