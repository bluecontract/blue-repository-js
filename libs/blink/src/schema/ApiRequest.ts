import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ApiRequestSchema = withTypeBlueId(blueIds.ApiRequest)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    headers: z.record(z.string(), z.string()).optional(),
    method: z.string().optional(),
    queryParams: z.record(z.string(), z.unknown()).optional(),
    body: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    url: z.string().optional(),
    timeout: z.number().optional(),
  })
);

export type ApiRequest = z.infer<typeof ApiRequestSchema>;
