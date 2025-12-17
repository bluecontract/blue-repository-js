import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const ParticipantSchema = withTypeBlueId(blueIds['MyOS/Participant'])(
  z.object({
    accountId: z.string().optional(),
    email: z.string().optional(),
    name: z.string().optional(),
    status: ParticipantActivationStateSchema.optional(),
    timelineId: z.string().optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
