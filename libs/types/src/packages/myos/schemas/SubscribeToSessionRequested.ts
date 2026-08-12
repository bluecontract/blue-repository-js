import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const SubscribeToSessionRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Subscribe to Session Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    subscription: zod
      .object({
        events: zod.array(blueNodeField()).optional(),
        id: zod.string().optional(),
      })
      .optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type SubscribeToSessionRequested = z.infer<
  typeof SubscribeToSessionRequestedSchema
>;
