import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSParticipantsOrchestrationSchema = withTypeBlueId(blueIds['MyOS/MyOS Participants Orchestration'])(
  z.object({})
);

export type MyOSParticipantsOrchestration = z.infer<typeof MyOSParticipantsOrchestrationSchema>;
