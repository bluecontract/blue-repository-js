import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const APIRequestSchema = withTypeBlueId(blueIds['API Request'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
    method: z.string().optional(),
    queryParams: z.record(z.string(), z.unknown()).optional(),
    body: blueNodeField().optional(),
    url: z.string().optional(),
    timeout: z.number().optional(),
  })
);

export type APIRequest = z.infer<typeof APIRequestSchema>;
