import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AddingParticipantRequestedSchema = withTypeBlueId(blueIds['MyOS/Adding Participant Requested'])(
  z.object({
    "channelName": z.string().optional(),
    "participantBinding": z.object({
        "email": z.string().optional(),
        "accountId": z.string().optional()
      }).optional()
  })
);

export type AddingParticipantRequested = z.infer<typeof AddingParticipantRequestedSchema>;
