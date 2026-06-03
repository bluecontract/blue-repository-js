import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AgentSchema } from './Agent';

const zod = z as any;

export const LLMAgentSchema: any = withTypeBlueId(blueIds['MyOS/LLM Agent'])(
  AgentSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type LLMAgent = z.infer<typeof LLMAgentSchema>;
