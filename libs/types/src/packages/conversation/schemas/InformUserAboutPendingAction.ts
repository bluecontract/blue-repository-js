import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

export const InformUserAboutPendingActionSchema = withTypeBlueId(blueIds['Conversation/Inform User About Pending Action'])(
  EventSchema.extend({
    "operation": z.string().optional(),
    "title": z.string().optional(),
    "message": z.string().optional(),
    "channel": z.string().optional(),
    "expectedRequest": blueNodeField().optional()
  })
);

export type InformUserAboutPendingAction = z.infer<typeof InformUserAboutPendingActionSchema>;
