import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';

export const AgentLLMSchema = withTypeBlueId(blueIds['MyOS/Agent LLM'])(
  AgentSchema.extend({
    description: z.string().optional(),
    llmEnabled: z.boolean().optional(),
    name: z.string().optional(),
  })
);

export type AgentLLM = z.infer<typeof AgentLLMSchema>;
