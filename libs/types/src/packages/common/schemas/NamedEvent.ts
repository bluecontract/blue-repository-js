import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const NamedEventSchema = withTypeBlueId(blueIds['Common/Named Event'])(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type NamedEvent = z.infer<typeof NamedEventSchema>;
