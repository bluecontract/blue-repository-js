import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscriptionToSessionFailedSchema = withTypeBlueId(
  blueIds['Subscription to Session Failed']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type SubscriptionToSessionFailed = z.infer<
  typeof SubscriptionToSessionFailedSchema
>;
