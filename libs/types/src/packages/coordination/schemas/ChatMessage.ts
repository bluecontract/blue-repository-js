import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MessageSchema } from './Message';

const zod = z as any;

export const ChatMessageSchema: any = withTypeBlueId(
  blueIds['Coordination/Chat Message']
)(
  MessageSchema.extend({
    description: zod.string().optional(),
    message: zod.string(),
    name: zod.string().optional(),
  })
);

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
