import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';

export const RemovingParticipantRespondedSchema = withTypeBlueId(
  blueIds['MyOS/Removing Participant Responded']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    request: z.lazy(() => RemovingParticipantRequestedSchema).optional(),
    status: z.string().optional(),
  })
);

export type RemovingParticipantResponded = z.infer<
  typeof RemovingParticipantRespondedSchema
>;
