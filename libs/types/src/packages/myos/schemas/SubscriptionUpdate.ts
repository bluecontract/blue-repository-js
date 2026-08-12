import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const SubscriptionUpdateSchema: any = withTypeBlueId(
  blueIds['MyOS/Subscription Update']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    subscriptionId: zod.string().optional(),
    targetSessionId: zod.string().optional(),
    update: blueNodeField().optional(),
  })
);

export type SubscriptionUpdate = z.infer<typeof SubscriptionUpdateSchema>;
