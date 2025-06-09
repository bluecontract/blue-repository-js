import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import {
  ContractInitializationEventSchema,
  ContractSchema,
  ExpectEventStepSchema,
  TriggerEventStepSchema,
  UpdateStepSchema,
} from '@blue-repository/blue-contracts';

export const ConditionsContractSchema = withTypeBlueId(
  blueIds['Conditions Contract']
)(
  ContractSchema.extend({
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
