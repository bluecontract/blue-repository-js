import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const ParticipantSchema = withTypeBlueId(blueIds['Participant'])(
  z.object({
    name: z.string().optional(),
    timeline: blueNodeField().optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
