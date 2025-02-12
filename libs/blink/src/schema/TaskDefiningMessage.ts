import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { RecommendedUserActionMessageSchema } from './RecommendedUserActionMessage';

export const TaskDefiningMessageSchema = withTypeBlueId(
  blueIds.TaskDefiningMessage
)(
  z.object({
    name: z.string().optional(),
    assistantInitialMessage: z.string().optional(),
    details: z.array(RecommendedUserActionMessageSchema).optional(),
    message: z.string().optional(),
  })
);

export type TaskDefiningMessage = z.infer<typeof TaskDefiningMessageSchema>;
