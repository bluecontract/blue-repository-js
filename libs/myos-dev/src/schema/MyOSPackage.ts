import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import { ChannelSchema } from '@blue-repository/core-dev';

export const MyOSPackageSchema = withTypeBlueId(blueIds['MyOS Package'])(
  AgentSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    agentStoreDescription: z.string().optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    document: blueNodeField().optional(),
    installerChannel: z.string().optional(),
    initialMessages: z
      .object({
        description: z.string().optional(),
        defaultMessage: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
    automationTemplate: z
      .object({
        description: z.string().optional(),
        type: z.string().optional(),
      })
      .optional(),
    channelBindings: z.record(z.string(), ChannelSchema).optional(),
  })
);

export type MyOSPackage = z.infer<typeof MyOSPackageSchema>;
