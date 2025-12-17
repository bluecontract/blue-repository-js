import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SubscriptionToSessionFailedSchema = withTypeBlueId(
  blueIds['Subscription to Session Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    subscriptionId: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionFailed = z.infer<
  typeof SubscriptionToSessionFailedSchema
>;
