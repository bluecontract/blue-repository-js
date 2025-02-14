import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { TimelineEntrySchema } from './TimelineEntry';

export const AllEventsExternalContractSubscriptionSchema = withTypeBlueId(
  blueIds.AllEventsExternalContractSubscription
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    initiateContractEntry: TimelineEntrySchema.optional(),
  })
);

export type AllEventsExternalContractSubscription = z.infer<
  typeof AllEventsExternalContractSubscriptionSchema
>;
