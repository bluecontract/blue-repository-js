import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';

export const SubscriptionToSessionFailedSchema = withTypeBlueId(
  blueIds['Subscription to Session Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionFailed = z.infer<
  typeof SubscriptionToSessionFailedSchema
>;
