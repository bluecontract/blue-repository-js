import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const SubscriptionToSessionInitiatedSchema = withTypeBlueId(
  blueIds['Subscription to Session Initiated']
)(
  ResponseSchema.extend({
    at: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    subscriptionId: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionInitiated = z.infer<
  typeof SubscriptionToSessionInitiatedSchema
>;
