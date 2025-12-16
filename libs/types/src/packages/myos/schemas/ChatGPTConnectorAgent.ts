import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';

export const ChatGPTConnectorAgentSchema = withTypeBlueId(blueIds['MyOS/Chat GPT Connector Agent'])(
  AgentSchema.extend({})
);

export type ChatGPTConnectorAgent = z.infer<typeof ChatGPTConnectorAgentSchema>;
