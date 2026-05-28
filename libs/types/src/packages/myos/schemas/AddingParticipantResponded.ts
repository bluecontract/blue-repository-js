import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';

export const AddingParticipantRespondedSchema = withTypeBlueId(
  blueIds['MyOS/Adding Participant Responded']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    request: z.lazy(() => AddingParticipantRequestedSchema).optional(),
    status: z.string().optional(),
  })
);

export type AddingParticipantResponded = z.infer<
  typeof AddingParticipantRespondedSchema
>;
