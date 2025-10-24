import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(
  blueIds['Subscribe to Session Requested']
)(
  EventSchema.extend({
    description: z.string().optional(),
    events: z.unknown().optional(),
    name: z.string().optional(),
    targetSessionId: z.unknown().optional(),
  })
);

export type SubscribeToSessionRequested = z.infer<
  typeof SubscribeToSessionRequestedSchema
>;
