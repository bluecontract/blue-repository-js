import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';
import { ChannelSchema } from '../../core/schemas/Channel';

export const StartWorkerSessionRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Start Worker Session Requested']
)(
  EventSchema.extend({
    capabilities: z.record(z.string(), z.boolean()).optional(),
    channelBindings: z.record(z.string(), ChannelSchema).optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        defaultMessage: z.string().optional(),
        description: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
    name: z.string().optional(),
    onBehalfOf: z.string().optional(),
  })
);

export type StartWorkerSessionRequested = z.infer<
  typeof StartWorkerSessionRequestedSchema
>;
