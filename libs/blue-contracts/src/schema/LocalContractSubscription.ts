import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { ContractSubscriptionSchema } from './ContractSubscription';

export const LocalContractSubscriptionSchema = withTypeBlueId(
  blueIds['Local Contract Subscription']
)(
  ContractSubscriptionSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    contractInstanceId: blueNodeField().optional(),
    event: blueNodeField().optional(),
    workflowInstanceId: blueNodeField().optional(),
  })
);

export type LocalContractSubscription = z.infer<
  typeof LocalContractSubscriptionSchema
>;
