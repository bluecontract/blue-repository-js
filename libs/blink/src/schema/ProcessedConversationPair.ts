import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { UserMessageSchema } from './UserMessage';
import { ConversationEntrySchema } from './ConversationEntry';

export const ProcessedConversationPairSchema = withTypeBlueId(
  blueIds.ProcessedConversationPair
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
