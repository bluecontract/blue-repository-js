import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
} from '@blue-repository/core-dev';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(
  blueIds['Chat GPT Connector Agent']
)(
  AgentSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    contracts: z
      .object({
        startWorker: OperationSchema.optional(),
        ownerChannel: MyOSTimelineChannelSchema.optional(),
        startWorkerImpl: SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
  })
);

export type ChatGPTConnectorAgent = z.infer<typeof ChatGPTConnectorAgentSchema>;
