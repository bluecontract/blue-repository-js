import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';

export const ContractSubscriptionSchema = withTypeBlueId(
  blueIds.ContractSubscription
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type ContractSubscription = z.infer<typeof ContractSubscriptionSchema>;
