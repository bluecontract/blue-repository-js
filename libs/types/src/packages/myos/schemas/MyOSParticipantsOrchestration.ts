import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const MyOSParticipantsOrchestrationSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Participants Orchestration']
)(
  zod.object({
    name: zod.string().optional(),
  })
);

export type MyOSParticipantsOrchestration = z.infer<
  typeof MyOSParticipantsOrchestrationSchema
>;
