import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';

export const LLMAgentSchema = withTypeBlueId(blueIds['MyOS/LLM Agent'])(
  AgentSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type LLMAgent = z.infer<typeof LLMAgentSchema>;
