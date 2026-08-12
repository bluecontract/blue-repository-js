import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SubscriptionToSessionInitiatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Subscription to Session Initiated']
)(
  ResponseSchema.extend({
    at: zod.string().optional(),
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    epoch: zod.number().optional(),
    name: zod.string().optional(),
    subscriptionId: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SubscriptionToSessionInitiated = z.infer<
  typeof SubscriptionToSessionInitiatedSchema
>;
