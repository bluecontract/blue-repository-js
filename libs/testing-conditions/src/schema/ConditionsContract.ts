import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import {
  ContractInitializationEventSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/bluecontractsv-04';

export const ConditionsContractSchema = withTypeBlueId(
  blueIds.ConditionsContract
)(
  z.object({
    name: z.string().optional(),
    properties: z
      .object({
        condition: z.boolean().optional(),
      })
      .optional(),
    workflows: z
      .tuple([
        z.object({
          steps: z
            .tuple([
              UpdateStepSchema,
              UpdateStepSchema,
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
  })
);

export type ConditionsContract = z.infer<typeof ConditionsContractSchema>;
