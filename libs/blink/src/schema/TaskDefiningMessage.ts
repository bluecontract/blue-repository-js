import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ConversationEntrySchema } from './ConversationEntry';
import { RecommendedUserActionMessageSchema } from './RecommendedUserActionMessage';

export const TaskDefiningMessageSchema = withTypeBlueId(
  blueIds['Task Defining Message']
)(
  ConversationEntrySchema.extend({
    name: z.string().optional(),
    assistantInitialMessage: z.string().optional(),
    details: z.array(RecommendedUserActionMessageSchema).optional(),
    message: z.string().optional(),
  })
);

export type TaskDefiningMessage = z.infer<typeof TaskDefiningMessageSchema>;
