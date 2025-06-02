import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const LlmRequestSchema = withTypeBlueId(blueIds.LlmRequest)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    prompt: z.string().optional(),
    promptParams: z.record(z.string(), z.unknown()).optional(),
  })
);

export type LlmRequest = z.infer<typeof LlmRequestSchema>;
