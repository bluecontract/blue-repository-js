import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ChannelSchema, RequestSchema } from '@blue-repository/core-dev';

export const StartWorkerSessionRequestedSchema = withTypeBlueId(
  blueIds['Start Worker Session Requested']
)(
  RequestSchema.extend({
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
