import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const MyOSSessionSubscriptionEndedSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Ended']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    sourceInitialDocument: blueNodeField(),
    subscriptionId: zod.string(),
  })
);

export type MyOSSessionSubscriptionEnded = z.infer<
  typeof MyOSSessionSubscriptionEndedSchema
>;
