import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ParticipantActivationStateSchema = withTypeBlueId(blueIds['MyOS/Participant Activation State'])(
  z.object({
    "accountStatus": z.string().optional(),
    "errorMessage": z.string().optional()
  })
);

export type ParticipantActivationState = z.infer<typeof ParticipantActivationStateSchema>;
