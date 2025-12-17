import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';

export const RemovingParticipantRespondedSchema = withTypeBlueId(
  blueIds['Removing Participant Responded']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    request: RemovingParticipantRequestedSchema.optional(),
    status: z.string().optional(),
  })
);

export type RemovingParticipantResponded = z.infer<
  typeof RemovingParticipantRespondedSchema
>;
