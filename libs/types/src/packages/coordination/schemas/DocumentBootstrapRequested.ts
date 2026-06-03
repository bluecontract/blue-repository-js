import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from './Request';

const zod = z as any;

export const DocumentBootstrapRequestedSchema: any = withTypeBlueId(
  blueIds['Coordination/Document Bootstrap Requested']
)(
  RequestSchema.extend({
    bootstrapAssignee: zod.string().optional(),
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

export type DocumentBootstrapRequested = z.infer<
  typeof DocumentBootstrapRequestedSchema
>;
