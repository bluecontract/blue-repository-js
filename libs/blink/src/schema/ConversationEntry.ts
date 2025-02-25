import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ConversationEntrySchema = withTypeBlueId(
  blueIds.ConversationEntry
)(
  z.object({
    name: z.string().optional(),
  })
);

export type ConversationEntry = z.infer<typeof ConversationEntrySchema>;
