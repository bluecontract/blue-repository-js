import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import { AnchorAutomationTemplateSchema } from './AnchorAutomationTemplate';
import { ChannelSchema } from '../../core/schemas/Channel';

export const MyOSPackageSchema = withTypeBlueId(blueIds['MyOS/MyOS Package'])(
  AgentSchema.extend({
    "document": blueNodeField().optional(),
    "agentStoreDescription": z.string().optional(),
    "channelBindings": z.record(z.string(), ChannelSchema).optional(),
    "installerChannel": z.string().optional(),
    "initialMessages": z.object({
        "defaultMessage": z.string().optional(),
        "perChannel": z.record(z.string(), z.string()).optional()
      }).optional(),
    "capabilities": z.record(z.string(), z.boolean()).optional(),
    "automationTemplate": AnchorAutomationTemplateSchema.optional()
  })
);

export type MyOSPackage = z.infer<typeof MyOSPackageSchema>;
