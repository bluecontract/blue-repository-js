import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChannelSchema } from '../../core/schemas/Channel';
import { AgentSchema } from './Agent';
import { AnchorAutomationTemplateSchema } from './AnchorAutomationTemplate';

export const MyOSPackageSchema = withTypeBlueId(blueIds['MyOS/MyOS Package'])(
  AgentSchema.extend({
    agentStoreDescription: z.string().optional(),
    automationTemplate: AnchorAutomationTemplateSchema.optional(),
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
