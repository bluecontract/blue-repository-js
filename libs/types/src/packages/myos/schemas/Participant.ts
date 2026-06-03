import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

const zod = z as any;

export const ParticipantSchema: any = withTypeBlueId(
  blueIds['MyOS/Participant']
)(
  zod.object({
    accountId: zod.string().optional(),
    email: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.lazy(() => ParticipantActivationStateSchema).optional(),
    timelineId: zod.string().optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
