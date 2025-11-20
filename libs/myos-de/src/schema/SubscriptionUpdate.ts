import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscriptionUpdateSchema = withTypeBlueId(
  blueIds['Subscription Update']
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
