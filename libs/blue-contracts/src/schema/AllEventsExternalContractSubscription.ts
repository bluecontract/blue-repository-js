import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-company/language';
import { ContractSubscriptionSchema } from './ContractSubscription';
import { TimelineEntrySchema } from './TimelineEntry';

export const AllEventsExternalContractSubscriptionSchema = withTypeBlueId(
  blueIds['All Events External Contract Subscription']
)(
  ContractSubscriptionSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
  })
);

export type AllEventsExternalContractSubscription = z.infer<
  typeof AllEventsExternalContractSubscriptionSchema
>;
