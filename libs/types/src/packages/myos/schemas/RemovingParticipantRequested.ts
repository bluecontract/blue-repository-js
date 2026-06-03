import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const RemovingParticipantRequestedSchema: any = withTypeBlueId(
  blueIds['MyOS/Removing Participant Requested']
)(
  RequestSchema.extend({
    channelName: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type RemovingParticipantRequested = z.infer<
  typeof RemovingParticipantRequestedSchema
>;
