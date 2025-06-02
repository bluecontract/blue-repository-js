import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavascriptCodeStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const JsCompleteContractSchema = withTypeBlueId(
  blueIds.JsCompleteContract
)(
  ContractSchema.extend({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
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
      ])
      .optional(),
    properties: z
      .object({
        abc: z.number().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Alice: z
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

export type JsCompleteContract = z.infer<typeof JsCompleteContractSchema>;
