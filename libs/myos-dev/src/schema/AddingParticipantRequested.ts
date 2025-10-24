import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AddingParticipantRequestedSchema = withTypeBlueId(
  blueIds['Adding Participant Requested']
)(
  z.object({
    channelName: z.unknown().optional(),
    name: z.string().optional(),
    participantBinding: z
      .object({
        accountId: z.unknown().optional(),
        description: z.string().optional(),
        email: z.unknown().optional(),
      })
      .optional(),
  })
);

export type AddingParticipantRequested = z.infer<
  typeof AddingParticipantRequestedSchema
>;
