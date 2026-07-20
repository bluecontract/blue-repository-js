import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MyOSSessionSubscriptionUpdateSchema } from './MyOSSessionSubscriptionUpdate';

const zod = z as any;

export const MyOSSessionSubscriptionStartedSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Started']
)(
  MyOSSessionSubscriptionUpdateSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSSessionSubscriptionStarted = z.infer<
  typeof MyOSSessionSubscriptionStartedSchema
>;
