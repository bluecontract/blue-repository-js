import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';

export const AddingParticipantRespondedSchema = withTypeBlueId(blueIds['MyOS/Adding Participant Responded'])(
  z.object({
    "request": AddingParticipantRequestedSchema.optional(),
    "status": z.string().optional()
  })
);

export type AddingParticipantResponded = z.infer<typeof AddingParticipantRespondedSchema>;
