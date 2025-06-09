import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';
import { ABCDESchema } from './ABCDE';

export const MyContractXYZSchema = withTypeBlueId(blueIds['My Contract XYZ'])(
  ContractSchema.extend({
    name: z.string().optional(),
    properties: z
      .object({
        ticket: ABCDESchema.optional(),
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

export type MyContractXYZ = z.infer<typeof MyContractXYZSchema>;
