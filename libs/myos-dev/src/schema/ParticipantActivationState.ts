import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ParticipantActivationStateSchema = withTypeBlueId(
  blueIds['Participant Activation State']
)(
  z.object({
    accountStatus: z.string().optional(),
    description: z.string().optional(),
    errorMessage: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ParticipantActivationState = z.infer<
  typeof ParticipantActivationStateSchema
>;
