import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CompositeTimelineChannelSchema: any = withTypeBlueId(
  blueIds['Coordination/Composite Timeline Channel']
)(
  zod.object({
    channels: zod.array(zod.string()).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CompositeTimelineChannel = z.infer<
  typeof CompositeTimelineChannelSchema
>;
