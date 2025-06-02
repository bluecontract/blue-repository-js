import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const ApiResponseSchema = withTypeBlueId(blueIds.ApiResponse)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
    responseTime: z.number().optional(),
    body: blueNodeField().optional(),
    error: z.string().optional(),
    contentType: z.string().optional(),
    statusCode: z.number().optional(),
  })
);

export type ApiResponse = z.infer<typeof ApiResponseSchema>;
