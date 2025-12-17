import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(
  blueIds['Subscribe to Session Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    subscription: z
      .object({
        events: z.array(z.unknown()).optional(),
        id: z.string().optional(),
      })
      .optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscribeToSessionRequested = z.infer<
  typeof SubscribeToSessionRequestedSchema
>;
