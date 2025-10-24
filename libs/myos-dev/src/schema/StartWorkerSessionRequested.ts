import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const StartWorkerSessionRequestedSchema = withTypeBlueId(
  blueIds['Start Worker Session Requested']
)(
  EventSchema.extend({
    capabilities: z.unknown().optional(),
    channelBindings: z.unknown().optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        defaultMessage: z.unknown().optional(),
        description: z.string().optional(),
        perChannel: z.unknown().optional(),
      })
      .optional(),
    name: z.string().optional(),
    onBehalfOf: z.unknown().optional(),
  })
);

export type StartWorkerSessionRequested = z.infer<
  typeof StartWorkerSessionRequestedSchema
>;
