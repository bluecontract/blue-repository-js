import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantSchema } from './Participant';

export const ParticipantActivatedSchema = withTypeBlueId(
  blueIds['Participant Activated']
)(
  z.object({
    channelName: z.string().optional(),
    name: z.string().optional(),
    participant: ParticipantSchema.optional(),
  })
);

export type ParticipantActivated = z.infer<typeof ParticipantActivatedSchema>;
