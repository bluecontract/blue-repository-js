import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  JavascriptCodeStepSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const DelegationTestingContractSchema = withTypeBlueId(
  blueIds.DelegationTestingContract
)(
  z.object({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([JavascriptCodeStepSchema, UpdateStepSchema])
            .optional(),
          trigger: z
            .object({
              event: TimelineEntrySchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z.tuple([TriggerEventStepSchema]).optional(),
          trigger: z
            .object({
              event: TimelineEntrySchema.optional(),
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

export type DelegationTestingContract = z.infer<
  typeof DelegationTestingContractSchema
>;
