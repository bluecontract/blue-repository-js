import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SubscriptionUpdateSchema = withTypeBlueId(
  blueIds['MyOS/Subscription Update']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    subscriptionId: z.string().optional(),
    targetSessionId: z.string().optional(),
    update: blueNodeField().optional(),
  })
);

export type SubscriptionUpdate = z.infer<typeof SubscriptionUpdateSchema>;
