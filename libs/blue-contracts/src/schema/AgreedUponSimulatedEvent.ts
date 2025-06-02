import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';

export const AgreedUponSimulatedEventSchema = withTypeBlueId(
  blueIds.AgreedUponSimulatedEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
  })
);

export type AgreedUponSimulatedEvent = z.infer<
  typeof AgreedUponSimulatedEventSchema
>;
