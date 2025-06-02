import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import {
  ContractSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { SimulatorTimelineEntrySchema } from '@blue-repository/simulator';

export const TempSampleSchema = withTypeBlueId(blueIds.TempSample)(
  ContractSchema.extend({
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
            Bob: blueNodeField().optional(),
            Alice: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type TempSample = z.infer<typeof TempSampleSchema>;
