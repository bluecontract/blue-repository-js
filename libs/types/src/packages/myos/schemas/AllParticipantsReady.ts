import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const AllParticipantsReadySchema: any = withTypeBlueId(
  blueIds['MyOS/All Participants Ready']
)(
  zod.object({
    name: zod.string().optional(),
  })
);

export type AllParticipantsReady = z.infer<typeof AllParticipantsReadySchema>;
