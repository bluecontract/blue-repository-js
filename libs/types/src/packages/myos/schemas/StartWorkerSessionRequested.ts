import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';
import { EventSchema } from '../../conversation/schemas/Event';

export const StartWorkerSessionRequestedSchema = withTypeBlueId(blueIds['MyOS/Start Worker Session Requested'])(
  EventSchema.extend({
    "onBehalfOf": z.string().optional(),
    "document": blueNodeField().optional(),
    "channelBindings": z.record(z.string(), ChannelSchema).optional(),
    "initialMessages": z.object({
        "defaultMessage": z.string().optional(),
        "perChannel": z.record(z.string(), z.string()).optional()
      }).optional(),
    "capabilities": z.record(z.string(), z.boolean()).optional()
  })
);

export type StartWorkerSessionRequested = z.infer<typeof StartWorkerSessionRequestedSchema>;
