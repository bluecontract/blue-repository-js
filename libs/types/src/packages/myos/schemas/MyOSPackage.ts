import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import { AnchorAutomationTemplateSchema } from './AnchorAutomationTemplate';

const zod = z as any;

export const MyOSPackageSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Package']
)(
  AgentSchema.extend({
    agentStoreDescription: zod.string().optional(),
    automationTemplate: zod
      .lazy(() => AnchorAutomationTemplateSchema)
      .optional(),
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
    installerChannel: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSPackage = z.infer<typeof MyOSPackageSchema>;
