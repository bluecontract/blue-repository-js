import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import {
  ContractSchema,
  JavaScriptCodeStepSchema,
  TimelineEntrySchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const DelegationTestingContractSchema = withTypeBlueId(
  blueIds.DelegationTestingContract
)(
  ContractSchema.extend({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([JavaScriptCodeStepSchema, UpdateStepSchema])
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
            Bob: blueNodeField().optional(),
            Alice: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type DelegationTestingContract = z.infer<
  typeof DelegationTestingContractSchema
>;
