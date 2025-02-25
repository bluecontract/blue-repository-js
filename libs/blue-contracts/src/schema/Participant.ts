import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ParticipantSchema = withTypeBlueId(blueIds.Participant)(
  z.object({
    name: z.string().optional(),
    timeline: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type Participant = z.infer<typeof ParticipantSchema>;
