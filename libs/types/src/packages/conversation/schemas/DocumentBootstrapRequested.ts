import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';
import { RequestSchema } from './Request';

export const DocumentBootstrapRequestedSchema = withTypeBlueId(
  blueIds['Conversation/Document Bootstrap Requested']
)(
  RequestSchema.extend({
    bootstrapAssignee: z.string().optional(),
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
  })
);

export type DocumentBootstrapRequested = z.infer<
  typeof DocumentBootstrapRequestedSchema
>;
