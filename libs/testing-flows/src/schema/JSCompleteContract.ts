import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  JavaScriptCodeStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const JSCompleteContractSchema = withTypeBlueId(
  blueIds['JS Complete Contract']
)(
  ContractSchema.extend({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
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

export type JSCompleteContract = z.infer<typeof JSCompleteContractSchema>;
