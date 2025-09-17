import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const AddingParticipantRequestedSchema = withTypeBlueId(
  blueIds['Adding Participant Requested']
)(
  z.object({
    name: z.string().optional(),
    channelName: z.string().optional(),
    participantBinding: z
      .object({
        description: z.string().optional(),
        accountId: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  })
);

export type AddingParticipantRequested = z.infer<
  typeof AddingParticipantRequestedSchema
>;
