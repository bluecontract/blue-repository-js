import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
} from '@blue-repository/conversation';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(
  blueIds['Chat GPT Connector Agent']
)(
  AgentSchema.extend({
    contracts: z
      .object({
        ownerChannel: MyOSTimelineChannelSchema.optional(),
        startWorker: OperationSchema.optional(),
        startWorkerImpl: SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ChatGPTConnectorAgent = z.infer<typeof ChatGPTConnectorAgentSchema>;
