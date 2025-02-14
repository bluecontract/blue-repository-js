import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';

export const AgreedUponSimulatedEventSchema = withTypeBlueId(
  blueIds.AgreedUponSimulatedEvent
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    event: z
      .object({
        description: z.string().optional(),
      })
      .optional(),
  })
);

export type AgreedUponSimulatedEvent = z.infer<
  typeof AgreedUponSimulatedEventSchema
>;
