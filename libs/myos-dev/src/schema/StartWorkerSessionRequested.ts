import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema, EventSchema } from '@blue-repository/core-dev';

export const StartWorkerSessionRequestedSchema = withTypeBlueId(
  blueIds['Start Worker Session Requested']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    onBehalfOf: z.string().optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    channelBindings: z.record(z.string(), ChannelSchema).optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        description: z.string().optional(),
        defaultMessage: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
  })
);

export type StartWorkerSessionRequested = z.infer<
  typeof StartWorkerSessionRequestedSchema
>;
