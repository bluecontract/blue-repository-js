import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const RemovingParticipantRequestedSchema = withTypeBlueId(
  blueIds['MyOS/Removing Participant Requested']
)(
  z.object({
    channelName: z.string().optional(),
    name: z.string().optional(),
  })
);

export type RemovingParticipantRequested = z.infer<
  typeof RemovingParticipantRequestedSchema
>;
