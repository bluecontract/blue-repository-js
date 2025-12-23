import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantSchema } from './Participant';

export const ParticipantResolvedSchema = withTypeBlueId(
  blueIds['MyOS/Participant Resolved']
)(
  z.object({
    channelName: z.string().optional(),
    name: z.string().optional(),
    participant: ParticipantSchema.optional(),
  })
);

export type ParticipantResolved = z.infer<typeof ParticipantResolvedSchema>;
