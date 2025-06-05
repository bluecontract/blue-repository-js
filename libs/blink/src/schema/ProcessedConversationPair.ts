import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { UserMessageSchema } from './UserMessage';
import { ConversationEntrySchema } from './ConversationEntry';

export const ProcessedConversationPairSchema = withTypeBlueId(
  blueIds['Processed Conversation Pair']
)(
  z.object({
    name: z.string().optional(),
    userMessage: UserMessageSchema.optional(),
    assistantMessage: ConversationEntrySchema.optional(),
  })
);

export type ProcessedConversationPair = z.infer<
  typeof ProcessedConversationPairSchema
>;
