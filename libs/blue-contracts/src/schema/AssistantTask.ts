import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const AssistantTaskSchema = withTypeBlueId(blueIds.AssistantTask)(
  z.object({
    name: z.string().optional(),
    request: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    response: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type AssistantTask = z.infer<typeof AssistantTaskSchema>;
