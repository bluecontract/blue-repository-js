import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const ParticipantSchema = withTypeBlueId(blueIds['Participant'])(
  z.object({
    accountId: z.unknown().optional(),
    email: z.unknown().optional(),
    name: z.string().optional(),
    status: ParticipantActivationStateSchema.optional(),
    timelineId: z.unknown().optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
