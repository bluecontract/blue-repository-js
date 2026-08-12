import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const MyOSSessionSubscriptionFilterSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Filter']
)(
  zod.object({
    description: zod.string().optional(),
    events: zod.array(blueNodeField()).optional(),
    name: zod.string().optional(),
    snapshots: zod
      .object({
        include: zod.string().optional(),
        initial: zod.boolean().optional(),
      })
      .optional(),
  })
);

export type MyOSSessionSubscriptionFilter = z.infer<
  typeof MyOSSessionSubscriptionFilterSchema
>;
