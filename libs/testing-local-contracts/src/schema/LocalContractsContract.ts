import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  InitializeLocalContractStepSchema,
  LocalContractSubscriptionSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const LocalContractsContractSchema = withTypeBlueId(
  blueIds.LocalContractsContract
)(
  ContractSchema.extend({
    name: z.string().optional(),
    subscriptions: z.tuple([LocalContractSubscriptionSchema]).optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z
            .tuple([InitializeLocalContractStepSchema, UpdateStepSchema])
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

export type LocalContractsContract = z.infer<
  typeof LocalContractsContractSchema
>;
