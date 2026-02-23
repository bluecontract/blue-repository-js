import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const SubscriptionToSessionInitiatedSchema = withTypeBlueId(
  blueIds['MyOS/Subscription to Session Initiated']
)(
  ResponseSchema.extend({
    at: z.string().optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    epoch: z.number().optional(),
    name: z.string().optional(),
    subscriptionId: z.string().optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscriptionToSessionInitiated = z.infer<
  typeof SubscriptionToSessionInitiatedSchema
>;
