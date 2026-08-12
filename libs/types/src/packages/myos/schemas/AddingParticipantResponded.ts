import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { AddingParticipantRequestedSchema } from './AddingParticipantRequested';

const zod = z as any;

export const AddingParticipantRespondedSchema: any = withTypeBlueId(
  blueIds['MyOS/Adding Participant Responded']
)(
  ResponseSchema.extend({
    name: zod.string().optional(),
    request: zod.lazy(() => AddingParticipantRequestedSchema).optional(),
    status: zod.string().optional(),
  })
);

export type AddingParticipantResponded = z.infer<
  typeof AddingParticipantRespondedSchema
>;
