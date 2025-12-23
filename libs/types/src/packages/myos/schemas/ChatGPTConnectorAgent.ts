import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { AgentSchema } from './Agent';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(
  blueIds['MyOS/Chat GPT Connector Agent']
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
