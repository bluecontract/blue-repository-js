import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const RemovingParticipantRequestedSchema = withTypeBlueId(
  blueIds['Removing Participant Requested']
)(
  z.object({
    name: z.string().optional(),
    channelName: z.string().optional(),
  })
);

export type RemovingParticipantRequested = z.infer<
  typeof RemovingParticipantRequestedSchema
>;
