import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const LlmResponseSchema = withTypeBlueId(blueIds.LlmResponse)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    responseTime: z.number().optional(),
    content: z.string().optional(),
  })
);

export type LlmResponse = z.infer<typeof LlmResponseSchema>;
