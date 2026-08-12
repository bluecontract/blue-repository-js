import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const SubscriptionToSessionRevokedSchema: any = withTypeBlueId(
  blueIds['MyOS/Subscription to Session Revoked']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    subscriptionId: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SubscriptionToSessionRevoked = z.infer<
  typeof SubscriptionToSessionRevokedSchema
>;
