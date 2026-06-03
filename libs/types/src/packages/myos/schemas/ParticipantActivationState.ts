import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ParticipantActivationStateSchema: any = withTypeBlueId(
  blueIds['MyOS/Participant Activation State']
)(
  zod.object({
    accountStatus: zod.string().optional(),
    description: zod.string().optional(),
    errorMessage: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ParticipantActivationState = z.infer<
  typeof ParticipantActivationStateSchema
>;
