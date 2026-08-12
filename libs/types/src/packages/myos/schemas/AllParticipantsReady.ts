import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const AllParticipantsReadySchema: any = withTypeBlueId(
  blueIds['MyOS/All Participants Ready']
)(
  EventSchema.extend({
    name: zod.string().optional(),
  })
);

export type AllParticipantsReady = z.infer<typeof AllParticipantsReadySchema>;
