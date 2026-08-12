import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { TimelineSchema } from './Timeline';

const zod = z as any;

export const TimelineChannelSchema: any = withTypeBlueId(
  blueIds['Coordination/Timeline Channel']
)(
  zod.object({
    actor: zod.lazy(() => ActorSchema),
    description: zod.string().optional(),
    name: zod.string().optional(),
    timeline: zod.lazy(() => TimelineSchema),
  })
);

export type TimelineChannel = z.infer<typeof TimelineChannelSchema>;
