import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';

export const RemovingParticipantRespondedSchema = withTypeBlueId(
  blueIds['Removing Participant Responded']
)(
  z.object({
    name: z.string().optional(),
    request: RemovingParticipantRequestedSchema.optional(),
    status: z.unknown().optional(),
  })
);

export type RemovingParticipantResponded = z.infer<
  typeof RemovingParticipantRespondedSchema
>;
