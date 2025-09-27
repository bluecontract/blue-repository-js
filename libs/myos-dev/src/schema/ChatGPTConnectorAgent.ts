import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  OperationSchema,
  SequentialWorkflowOperationSchema,
} from '@blue-repository/core-dev';
import { MyOSTimelineChannelSchema } from './MyOSTimelineChannel';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(
  blueIds['Chat GPT Connector Agent']
)(
  z.object({
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
