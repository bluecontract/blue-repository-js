import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const AddingParticipantRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Adding Participant Requested']
)(
  RequestSchema.extend({
    channelName: zod.string().optional(),
    name: zod.string().optional(),
    participantBinding: zod
      .object({
        accountId: zod.string().optional(),
        description: zod.string().optional(),
        email: zod.string().optional(),
      })
      .optional(),
  })
);

export type AddingParticipantRequested = z.infer<
  typeof AddingParticipantRequestedSchema
>;
