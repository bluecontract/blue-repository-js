import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { AgentSchema } from './Agent';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(
  blueIds['MyOS/Chat GPT Connector Agent']
)(
  AgentSchema.extend({
    contracts: z
      .object({
        ownerChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        startWorker: z.lazy(() => OperationSchema).optional(),
        startWorkerImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ChatGPTConnectorAgent = z.infer<typeof ChatGPTConnectorAgentSchema>;
