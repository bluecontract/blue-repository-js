import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SubscriptionToSessionInitiatedSchema = withTypeBlueId(blueIds['MyOS/Subscription to Session Initiated'])(
  EventSchema.extend({
    "subscriptionId": z.string().optional(),
    "targetSessionId": z.string().optional(),
    "at": z.string().optional()
  })
);

export type SubscriptionToSessionInitiated = z.infer<typeof SubscriptionToSessionInitiatedSchema>;
