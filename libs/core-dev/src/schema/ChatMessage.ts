import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ChatMessageSchema = withTypeBlueId(blueIds['Chat Message'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    message: z.string().optional(),
  })
);

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
