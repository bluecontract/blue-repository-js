import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '@blue-repository/conversation';

export const AddingParticipantRequestedSchema = withTypeBlueId(
  blueIds['Adding Participant Requested']
)(
  RequestSchema.extend({
    channelName: z.string().optional(),
    name: z.string().optional(),
    participantBinding: z
      .object({
        accountId: z.string().optional(),
        description: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  })
);

export type AddingParticipantRequested = z.infer<
  typeof AddingParticipantRequestedSchema
>;
