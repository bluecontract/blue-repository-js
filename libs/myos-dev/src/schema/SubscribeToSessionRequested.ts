import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(
  blueIds['Subscribe to Session Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    targetSessionId: z.string().optional(),
    events: z.array(z.string()).optional(),
  })
);

export type SubscribeToSessionRequested = z.infer<
  typeof SubscribeToSessionRequestedSchema
>;
