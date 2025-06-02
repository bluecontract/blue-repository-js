import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const LlmResponseSchema = withTypeBlueId(blueIds.LlmResponse)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    responseTime: z.number().optional(),
    content: z.string().optional(),
  })
);

export type LlmResponse = z.infer<typeof LlmResponseSchema>;
