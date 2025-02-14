import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const LocalContractSubscriptionSchema = withTypeBlueId(
  blueIds.LocalContractSubscription
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    contractInstanceId: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    event: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
    workflowInstanceId: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type LocalContractSubscription = z.infer<
  typeof LocalContractSubscriptionSchema
>;
