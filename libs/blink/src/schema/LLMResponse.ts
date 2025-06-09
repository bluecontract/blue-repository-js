import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const LLMResponseSchema = withTypeBlueId(blueIds['LLM Response'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    responseTime: z.number().optional(),
    content: z.string().optional(),
  })
);

export type LLMResponse = z.infer<typeof LLMResponseSchema>;
