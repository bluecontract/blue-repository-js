import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Subscribe to Session Requested']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    subscription: z
      .object({
        events: z.array(blueNodeField()).optional(),
        id: z.string().optional(),
      })
      .optional(),
    targetSessionId: z.string().optional(),
  })
);

export type SubscribeToSessionRequested = z.infer<
  typeof SubscribeToSessionRequestedSchema
>;
