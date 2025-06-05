import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const ConversationEntrySchema = withTypeBlueId(
  blueIds['Conversation Entry']
)(
  z.object({
    name: z.string().optional(),
  })
);

export type ConversationEntry = z.infer<typeof ConversationEntrySchema>;
