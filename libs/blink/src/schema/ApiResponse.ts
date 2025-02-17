import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ApiResponseSchema = withTypeBlueId(blueIds.ApiResponse)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
    responseTime: z.number().optional(),
    body: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    error: z.string().optional(),
    contentType: z.string().optional(),
    statusCode: z.number().optional(),
  })
);

export type ApiResponse = z.infer<typeof ApiResponseSchema>;
