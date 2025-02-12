import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const TimelineEntrySchema = withTypeBlueId(blueIds.TimelineEntry)(
  z.object({
    name: z.string().optional(),
    threadPrev: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    signature: z.string().optional(),
    timeline: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    thread: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    timelinePrev: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    message: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
