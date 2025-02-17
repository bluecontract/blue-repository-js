import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { UpdateStepSchema } from '@blue-repository/blue-contracts';
import { SimulatorTimelineEntrySchema } from '@blue-repository/simulator';

export const TempSampleSchema = withTypeBlueId(blueIds.TempSample)(
  z.object({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z.tuple([UpdateStepSchema]).optional(),
          trigger: z
            .object({
              event: SimulatorTimelineEntrySchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        x: z.number().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Bob: z
              .object({
                description: z.string().optional(),
              })
              .optional(),
            Alice: z
              .object({
                description: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type TempSample = z.infer<typeof TempSampleSchema>;
