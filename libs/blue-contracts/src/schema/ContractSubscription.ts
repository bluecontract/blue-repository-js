import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const ContractSubscriptionSchema = withTypeBlueId(
  blueIds['Contract Subscription']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type ContractSubscription = z.infer<typeof ContractSubscriptionSchema>;
