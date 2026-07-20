import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const MyOSSessionSubscriptionUpdateSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Update']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    events: zod.array(blueNodeField()),
    name: zod.string().optional(),
    sourceInitialDocument: blueNodeField(),
    subscriptionId: zod.string(),
  })
);

export type MyOSSessionSubscriptionUpdate = z.infer<
  typeof MyOSSessionSubscriptionUpdateSchema
>;
