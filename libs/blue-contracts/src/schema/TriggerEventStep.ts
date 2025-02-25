import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const TriggerEventStepSchema = withTypeBlueId(blueIds.TriggerEventStep)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    event: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type TriggerEventStep = z.infer<typeof TriggerEventStepSchema>;
