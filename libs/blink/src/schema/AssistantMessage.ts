import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ConversationEntrySchema } from './ConversationEntry';

export const AssistantMessageSchema = withTypeBlueId(
  blueIds['Assistant Message']
)(
  ConversationEntrySchema.extend({
    name: z.string().optional(),
    relevantContractTypes: z.array(z.string()).optional(),
    relevantAssistantTypes: z.array(z.string()).optional(),
    message: z.string().optional(),
    priority: z.string().optional(),
    contracts: z.record(z.string(), z.unknown()).optional(),
  })
);

export type AssistantMessage = z.infer<typeof AssistantMessageSchema>;
