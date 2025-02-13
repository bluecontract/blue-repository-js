import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { AbcdeSchema } from './Abcde';
import {
  ContractInitializationEventSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const MyContractXyzSchema = withTypeBlueId(blueIds.MyContractXyz)(
  z.object({
    name: z.string().optional(),
    properties: z
      .object({
        ticket: AbcdeSchema.optional(),
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

export type MyContractXyz = z.infer<typeof MyContractXyzSchema>;
