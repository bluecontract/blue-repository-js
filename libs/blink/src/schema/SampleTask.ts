import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/bluecontractsv-04';

export const SampleTaskSchema = withTypeBlueId(blueIds.SampleTask)(
  z.object({
    name: z.string().optional(),
    properties: z
      .object({
        result: z
          .object({
            description: z.string().optional(),
          })
          .optional(),
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
