import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantSchema } from './Participant';

export const ParticipantResolvedSchema = withTypeBlueId(
  blueIds['Participant Resolved']
)(
  z.object({
    name: z.string().optional(),
    channelName: z.string().optional(),
    participant: ParticipantSchema.optional(),
  })
);

export type ParticipantResolved = z.infer<typeof ParticipantResolvedSchema>;
