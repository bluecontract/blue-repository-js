import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  TriggerEventStepSchema,
} from '@blue-repository/blue-contracts';

export const MakeChessMoveTaskSchema = withTypeBlueId(
  blueIds['Make Chess Move Task']
)(
  ContractSchema.extend({
    name: z.string().optional(),
    properties: z
      .object({
        from: z.string().optional(),
        to: z.string().optional(),
      })
      .optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z.tuple([TriggerEventStepSchema]).optional(),
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

export type MakeChessMoveTask = z.infer<typeof MakeChessMoveTaskSchema>;
