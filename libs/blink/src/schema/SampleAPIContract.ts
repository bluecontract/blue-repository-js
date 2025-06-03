import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const SampleAPIContractSchema = withTypeBlueId(
  blueIds.SampleAPIContract
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
        result: blueNodeField().optional(),
      })
      .optional(),
    messaging: z
      .object({
        participants: z
          .object({
            Assistant: blueNodeField().optional(),
          })
          .optional(),
      })
      .optional(),
  })
);

export type SampleAPIContract = z.infer<typeof SampleAPIContractSchema>;
