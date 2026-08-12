import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const NamedEventSchema: any = withTypeBlueId(
  blueIds['Common/Named Event']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type NamedEvent = z.infer<typeof NamedEventSchema>;
