import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const SampleTaskSchema = withTypeBlueId(blueIds['Sample Task'])(
  ContractSchema.extend({
    name: z.string().optional(),
    properties: z
      .object({
        result: blueNodeField().optional(),
        fen: z.string().optional(),
      })
      .optional(),
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
              TriggerEventStepSchema,
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
  })
);

export type SampleTask = z.infer<typeof SampleTaskSchema>;
