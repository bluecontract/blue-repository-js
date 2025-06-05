import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { AssistantTaskSchema } from './AssistantTask';

export const AssistantTaskReadyEventSchema = withTypeBlueId(
  blueIds['Assistant Task Ready Event']
)(
  z.object({
    name: z.string().optional(),
    task: AssistantTaskSchema.optional(),
  })
);

export type AssistantTaskReadyEvent = z.infer<
  typeof AssistantTaskReadyEventSchema
>;
