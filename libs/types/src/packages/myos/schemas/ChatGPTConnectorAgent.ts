import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { AgentSchema } from './Agent';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

const zod = z as any;

export const ChatGPTConnectorAgentSchema: any = withTypeBlueId(
  blueIds['MyOS/Chat GPT Connector Agent']
)(
  AgentSchema.extend({
    contracts: zod
      .object({
        ownerChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        startWorker: zod.lazy(() => OperationSchema).optional(),
        startWorkerImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ChatGPTConnectorAgent = z.infer<typeof ChatGPTConnectorAgentSchema>;
