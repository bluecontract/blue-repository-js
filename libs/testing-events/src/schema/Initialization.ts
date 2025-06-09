import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const InitializationSchema = withTypeBlueId(blueIds['Initialization'])(
  ContractSchema.extend({
    name: z.string().optional(),
    properties: z
      .object({
        ticket: z
          .object({
            type: z.string().optional(),
          })
          .optional(),
        x: z.number().optional(),
      })
      .optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z.tuple([UpdateStepSchema]).optional(),
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

export type Initialization = z.infer<typeof InitializationSchema>;
