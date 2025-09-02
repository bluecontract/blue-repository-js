import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const DocumentSessionBootstrapSchema = withTypeBlueId(
  blueIds['Document Session Bootstrap']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        description: z.string().optional(),
        defaultMessage: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
    contracts: z
      .object({
        description: z.string().optional(),
        initiatorChannel: MyOSTimelineChannelSchema.optional(),
        myOsAdminChannel: MyOSTimelineChannelSchema.optional(),
      })
      .optional(),
    channelBindings: z.record(z.string(), MyOSTimelineChannelSchema).optional(),
    status: z.string().optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
