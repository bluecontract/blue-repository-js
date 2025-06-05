import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const AssistantTaskSchema = withTypeBlueId(blueIds['Assistant Task'])(
  z.object({
    name: z.string().optional(),
    request: blueNodeField().optional(),
    response: blueNodeField().optional(),
  })
);

export type AssistantTask = z.infer<typeof AssistantTaskSchema>;
