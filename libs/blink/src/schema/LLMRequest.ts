import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const LLMRequestSchema = withTypeBlueId(blueIds['LLM Request'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    prompt: z.string().optional(),
    promptParams: z.record(z.string(), z.unknown()).optional(),
  })
);

export type LLMRequest = z.infer<typeof LLMRequestSchema>;
