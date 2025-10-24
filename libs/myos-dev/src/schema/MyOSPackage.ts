import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';

export const MyOSPackageSchema = withTypeBlueId(blueIds['MyOS Package'])(
  AgentSchema.extend({
    agentStoreDescription: z.unknown().optional(),
    automationTemplate: z
      .object({
        description: z.string().optional(),
        type: z.unknown().optional(),
      })
      .optional(),
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
    installerChannel: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type MyOSPackage = z.infer<typeof MyOSPackageSchema>;
