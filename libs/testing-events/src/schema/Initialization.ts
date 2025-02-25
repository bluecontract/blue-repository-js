import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  UpdateStepSchema,
} from '@blue-repository/bluecontractsv-04';

export const InitializationSchema = withTypeBlueId(blueIds.Initialization)(
  z.object({
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
