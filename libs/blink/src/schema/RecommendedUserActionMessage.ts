import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { ConversationEntrySchema } from './ConversationEntry';

export const RecommendedUserActionMessageSchema = withTypeBlueId(
  blueIds.RecommendedUserActionMessage
)(
  ConversationEntrySchema.extend({
    name: z.string().optional(),
    message: z.string().optional(),
    action: blueNodeField().optional(),
  })
);

export type RecommendedUserActionMessage = z.infer<
  typeof RecommendedUserActionMessageSchema
>;
