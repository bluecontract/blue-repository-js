import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import { ChannelSchema } from '@blue-repository/core-dev';

export const MyOSPackageSchema = withTypeBlueId(blueIds['MyOS Package'])(
  AgentSchema.extend({
    agentStoreDescription: z.string().optional(),
    automationTemplate: z
      .object({
        description: z.string().optional(),
        type: z.string().optional(),
      })
      .optional(),
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
    installerChannel: z.string().optional(),
    name: z.string().optional(),
  })
);

export type MyOSPackage = z.infer<typeof MyOSPackageSchema>;
