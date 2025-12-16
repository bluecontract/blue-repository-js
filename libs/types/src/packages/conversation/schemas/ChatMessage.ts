import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

export const ChatMessageSchema = withTypeBlueId(blueIds['Conversation/Chat Message'])(
  EventSchema.extend({
    "message": z.string().optional()
  })
);

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
