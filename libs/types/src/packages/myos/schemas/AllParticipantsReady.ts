import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AllParticipantsReadySchema = withTypeBlueId(
  blueIds['MyOS/All Participants Ready']
)(
  z.object({
    name: z.string().optional(),
  })
);

export type AllParticipantsReady = z.infer<typeof AllParticipantsReadySchema>;
