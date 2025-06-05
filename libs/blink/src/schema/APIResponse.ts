import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const APIResponseSchema = withTypeBlueId(blueIds['API Response'])(
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

export type APIResponse = z.infer<typeof APIResponseSchema>;
