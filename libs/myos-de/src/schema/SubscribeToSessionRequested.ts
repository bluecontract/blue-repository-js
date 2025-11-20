import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(
  blueIds['Subscribe to Session Requested']
)(
  EventSchema.extend({
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
