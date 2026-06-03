import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const TimelineChannelSchema: any = withTypeBlueId(
  blueIds['Coordination/Timeline Channel']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    timelineId: zod.string().optional(),
  })
);

export type TimelineChannel = z.infer<typeof TimelineChannelSchema>;
