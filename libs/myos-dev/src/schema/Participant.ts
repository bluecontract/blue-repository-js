import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const ParticipantSchema = withTypeBlueId(blueIds['Participant'])(
  z.object({
    name: z.string().optional(),
    timelineId: z.string().optional(),
    accountId: z.string().optional(),
    email: z.string().optional(),
    status: ParticipantActivationStateSchema.optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
