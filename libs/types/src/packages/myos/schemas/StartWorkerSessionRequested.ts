import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const StartWorkerSessionRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Start Worker Session Requested']
)(
  RequestSchema.extend({
    capabilities: zod.record(zod.string(), zod.boolean()).optional(),
    channelBindings: zod.record(zod.string(), blueNodeField()).optional(),
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    initialMessages: zod
      .object({
        defaultMessage: zod.string().optional(),
        description: zod.string().optional(),
        perChannel: zod.record(zod.string(), zod.string()).optional(),
      })
      .optional(),
    name: zod.string().optional(),
    onBehalfOf: zod.string().optional(),
  })
);

export type StartWorkerSessionRequested = z.infer<
  typeof StartWorkerSessionRequestedSchema
>;
