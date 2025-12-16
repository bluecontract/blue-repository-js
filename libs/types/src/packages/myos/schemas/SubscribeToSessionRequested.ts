import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SubscribeToSessionRequestedSchema = withTypeBlueId(blueIds['MyOS/Subscribe to Session Requested'])(
  EventSchema.extend({
    "targetSessionId": z.string().optional(),
    "subscription": z.object({
        "id": z.string().optional(),
        "events": z.array(blueNodeField()).optional()
      }).optional()
  })
);

export type SubscribeToSessionRequested = z.infer<typeof SubscribeToSessionRequestedSchema>;
