import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';

export const RemovingParticipantRespondedSchema = withTypeBlueId(blueIds['MyOS/Removing Participant Responded'])(
  z.object({
    "request": RemovingParticipantRequestedSchema.optional(),
    "status": z.string().optional()
  })
);

export type RemovingParticipantResponded = z.infer<typeof RemovingParticipantRespondedSchema>;
