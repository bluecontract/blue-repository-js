import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantSchema } from './Participant';

const zod = z as any;

export const ParticipantActivatedSchema: any = withTypeBlueId(
  blueIds['MyOS/Participant Activated']
)(
  zod.object({
    channelName: zod.string().optional(),
    name: zod.string().optional(),
    participant: zod.lazy(() => ParticipantSchema).optional(),
  })
);

export type ParticipantActivated = z.infer<typeof ParticipantActivatedSchema>;
