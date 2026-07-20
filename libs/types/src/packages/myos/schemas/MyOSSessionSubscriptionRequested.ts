import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';
import { MyOSSessionSubscriptionFilterSchema } from './MyOSSessionSubscriptionFilter';

const zod = z as any;

export const MyOSSessionSubscriptionRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Subscription Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    filter: zod.lazy(() => MyOSSessionSubscriptionFilterSchema).optional(),
    linkedDocuments: zod
      .array(
        zod.object({
          anchor: zod.string(),
          filter: zod
            .lazy(() => MyOSSessionSubscriptionFilterSchema)
            .optional(),
        })
      )
      .optional(),
    name: zod.string().optional(),
    sourceInitialDocument: blueNodeField(),
  })
);

export type MyOSSessionSubscriptionRequested = z.infer<
  typeof MyOSSessionSubscriptionRequestedSchema
>;
