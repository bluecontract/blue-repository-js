import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SubscriptionToSessionRevokedSchema = withTypeBlueId(
  blueIds['MyOS/Subscription to Session Revoked']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    subscriptionId: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionRevoked = z.infer<
  typeof SubscriptionToSessionRevokedSchema
>;
