import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';

export const AddingParticipantRespondedSchema = withTypeBlueId(
  blueIds['Adding Participant Responded']
)(
  z.object({
    name: z.string().optional(),
    request: AddingParticipantRequestedSchema.optional(),
    status: z.string().optional(),
  })
);

export type AddingParticipantResponded = z.infer<
  typeof AddingParticipantRespondedSchema
>;
