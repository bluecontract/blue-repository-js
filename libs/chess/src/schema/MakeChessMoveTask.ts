import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  TriggerEventStepSchema,
} from '@blue-repository/blue-contracts';

export const MakeChessMoveTaskSchema = withTypeBlueId(
  blueIds.MakeChessMoveTask
)(
  z.object({
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
