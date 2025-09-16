import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSSessionInteractionSchema = withTypeBlueId(
  blueIds['MyOS Session Interaction']
)(
  z.object({
    name: z.string().optional(),
  })
);

export type MyOSSessionInteraction = z.infer<
  typeof MyOSSessionInteractionSchema
>;
