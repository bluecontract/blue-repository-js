import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantSchema } from './Participant';

const zod = z as any;

export const ParticipantResolvedSchema: any = withTypeBlueId(
  blueIds['MyOS/Participant Resolved']
)(
  zod.object({
    channelName: zod.string().optional(),
    name: zod.string().optional(),
    participant: zod.lazy(() => ParticipantSchema).optional(),
  })
);

export type ParticipantResolved = z.infer<typeof ParticipantResolvedSchema>;
