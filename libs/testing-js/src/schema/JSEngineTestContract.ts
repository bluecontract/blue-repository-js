import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavaScriptCodeStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const JSEngineTestContractSchema = withTypeBlueId(
  blueIds.JSEngineTestContract
)(
  ContractSchema.extend({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              UpdateStepSchema,
              JavaScriptCodeStepSchema,
              UpdateStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              event: ContractInitializationEventSchema.optional(),
            })
            .optional(),
        }),
        z.object({
          name: z.string().optional(),
          steps: z
            .tuple([
              JavaScriptCodeStepSchema,
              JavaScriptCodeStepSchema,
              UpdateStepSchema,
              JavaScriptCodeStepSchema,
              UpdateStepSchema,
            ])
            .optional(),
          trigger: z
            .object({
              event: ContractInitializationEventSchema.optional(),
            })
            .optional(),
        }),
      ])
      .optional(),
    properties: z
      .object({
        nested: z
          .object({
            prop: z.number().optional(),
          })
          .optional(),
        initialValue: z.number().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Tester: z
              .object({
                timeline: z.number().optional(),
              })
              .optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type JSEngineTestContract = z.infer<typeof JSEngineTestContractSchema>;
