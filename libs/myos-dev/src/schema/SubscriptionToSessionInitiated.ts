import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscriptionToSessionInitiatedSchema = withTypeBlueId(
  blueIds['Subscription to Session Initiated']
)(
  EventSchema.extend({
    at: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionInitiated = z.infer<
  typeof SubscriptionToSessionInitiatedSchema
>;
