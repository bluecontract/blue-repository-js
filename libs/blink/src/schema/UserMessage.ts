import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ConversationEntrySchema } from './ConversationEntry';

export const UserMessageSchema = withTypeBlueId(blueIds['User Message'])(
  ConversationEntrySchema.extend({
    name: z.string().optional(),
    relevantContractTypes: z.array(z.string()).optional(),
    relevantAssistantTypes: z.array(z.string()).optional(),
    message: z.string().optional(),
    contracts: z.record(z.string(), z.string()).optional(),
    generateResponse: z.boolean().optional(),
  })
);

export type UserMessage = z.infer<typeof UserMessageSchema>;
