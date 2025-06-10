import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const MyOSTimelineSchema = withTypeBlueId(blueIds['MyOS Timeline'])(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    accountId: z.number().optional(),
  })
);

export type MyOSTimeline = z.infer<typeof MyOSTimelineSchema>;
