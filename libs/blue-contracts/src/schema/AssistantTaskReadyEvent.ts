import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { AssistantTaskSchema } from './AssistantTask';

export const AssistantTaskReadyEventSchema = withTypeBlueId(
  blueIds.AssistantTaskReadyEvent
)(
  z.object({
    name: z.string().optional(),
    task: AssistantTaskSchema.optional(),
  })
);

export type AssistantTaskReadyEvent = z.infer<
  typeof AssistantTaskReadyEventSchema
>;
