import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const ExpectEventStepSchema = withTypeBlueId(blueIds.ExpectEventStep)(
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

export type ExpectEventStep = z.infer<typeof ExpectEventStepSchema>;
