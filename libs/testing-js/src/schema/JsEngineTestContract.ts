import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavascriptCodeStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const JsEngineTestContractSchema = withTypeBlueId(
  blueIds.JsEngineTestContract
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
              JavascriptCodeStepSchema,
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
              JavascriptCodeStepSchema,
              JavascriptCodeStepSchema,
              UpdateStepSchema,
              JavascriptCodeStepSchema,
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

export type JsEngineTestContract = z.infer<typeof JsEngineTestContractSchema>;
