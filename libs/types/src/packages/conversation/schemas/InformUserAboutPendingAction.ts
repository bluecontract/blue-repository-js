import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

export const InformUserAboutPendingActionSchema = withTypeBlueId(
  blueIds['Conversation/Inform User About Pending Action']
)(
  EventSchema.extend({
    channel: z.string().optional(),
    description: z.string().optional(),
    expectedRequest: blueNodeField().optional(),
    message: z.string().optional(),
    name: z.string().optional(),
    operation: z.string().optional(),
    title: z.string().optional(),
  })
);

export type InformUserAboutPendingAction = z.infer<
  typeof InformUserAboutPendingActionSchema
>;
