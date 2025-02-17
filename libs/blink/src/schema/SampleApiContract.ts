import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const SampleApiContractSchema = withTypeBlueId(
  blueIds.SampleApiContract
)(
  z.object({
    name: z.string().optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z
            .tuple([
              TriggerEventStepSchema,
              ExpectEventStepSchema,
              TriggerEventStepSchema,
              ExpectEventStepSchema,
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
        result: z
          .object({
            description: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Assistant: z
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

export type SampleApiContract = z.infer<typeof SampleApiContractSchema>;
