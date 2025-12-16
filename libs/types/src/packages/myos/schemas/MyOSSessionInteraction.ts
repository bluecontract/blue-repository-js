import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSSessionInteractionSchema = withTypeBlueId(blueIds['MyOS/MyOS Session Interaction'])(
  z.object({})
);

export type MyOSSessionInteraction = z.infer<typeof MyOSSessionInteractionSchema>;
