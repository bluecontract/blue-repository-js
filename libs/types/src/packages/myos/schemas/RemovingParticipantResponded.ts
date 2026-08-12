import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';
import { RemovingParticipantRequestedSchema } from './RemovingParticipantRequested';

const zod = z as any;

export const RemovingParticipantRespondedSchema: any = withTypeBlueId(
  blueIds['MyOS/Removing Participant Responded']
)(
  ResponseSchema.extend({
    name: zod.string().optional(),
    request: zod.lazy(() => RemovingParticipantRequestedSchema).optional(),
    status: zod.string().optional(),
  })
);

export type RemovingParticipantResponded = z.infer<
  typeof RemovingParticipantRespondedSchema
>;
